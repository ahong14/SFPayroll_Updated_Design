const express = require('express');
const router = express.Router();
const Positions = require('../models/Postings');
const redisClient = require('./redis');
const PDFDocument = require('pdfkit');
const path = require('path');
const fs = require('fs');
const moment = require('moment-timezone');

//multer setup
const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../pdfs'))
    },

    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})
const upload = multer({storage: storage});

//get all available job postings from database
router.get('/getPostings', (req,res) => {
    //check cache for postings
    redisClient.get('postings', (err, results) => {
        if(err){
            return res.status(500).json({
                success: false,
                message: "Error with redis"
            })
        }

        //cache hit
        else if(results){
            let postingsJSON = JSON.parse(results);
            return res.status(200).json(postingsJSON);
        }

        //cache miss, query db
        else{
            //get positions within past 60 days
            //reference: https://stackoverflow.com/questions/42712006/how-to-filter-last-10-days-records-from-mongodb
            //https://stackoverflow.com/questions/38553885/mongodb-aggregate-the-record-count-based-on-last-30-days
            Positions.find({} , null, {sort:{'sortDate':-1}})
                .then(positions => {
                    //update cache with postings results
                    //set expiration
                    redisClient.setex('postings', 20, JSON.stringify(positions))
                    return res.status(200).send(positions);
                })
                .catch(err => {
                    return res.status(500).send("Error with database");
                })
        }
    })
})

//edit career information
router.put('/edit', upload.single('newPdf'), (req, res) => {
    var id;
    var newCareerContent;
    var newPdf;

    if(req.query.params){
        id = req.query.params.id;
        newCareerContent = req.query.params.newCareerContent;
        newPdf = req.query.params.newPdf;
    }

    else if(req.query){
        id = req.query.id;
        newCareerContent = req.query.newCareerContent;
        newPdf = req.query.newPdf;
    }

    //convert string to JSON object containing career info
    newCareerContent = JSON.parse(newCareerContent);

    //if using same pdf link, update other info 
    if(newPdf == false){
        let sortDate = new Date();
        sortDate = moment(sortDate).tz('America/Los_Angeles').format('YYYY-MM-DD');
        newCareerContent['sortDate'] = sortDate;

        //insert object into mongo db
        Positions.update({_id: id}, {...newCareerContent}, {overwrite: true}, (err, result) => {
            if(err){
                return res.status(500).json({
                    success: false,
                    message: "Error with mongo database"
                })
            }

            return res.status(200).json({
                success: true,
                message: "Career successfully updated"
            })
        })
    }

    //new pdf being created for current position
    else{
        //check if user uploaded pdf
        if(req.file){
            let pdfName = "";
            //use file's original name, if no original name construct filename
            req.file.originalname ? pdfName = req.file.originalname : pdfName = params.title + "_" + params.company + ".pdf";

            //create new pdf link
            let pdfLink = '/api/pdfs/?pdfName=' + pdfName;
            newCareerContent.link = pdfLink;
            //create new sort date
            let sortDate = new Date();
            sortDate = moment(sortDate).tz('America/Los_Angeles').format('YYYY-MM-DD');

            console.log("inserting uploaded pdf", newCareerContent);
            //insert object into mongo db
            Positions.update({_id: id}, {...newCareerContent}, {overwrite: true}, (err, result) => {
                if(err){
                    return res.status(500).json({
                        success: false,
                        message: "Error with mongo database"
                    })
                }

                return res.status(200).json({
                    success: true,
                    message: "Career successfully updated"
                })
            })
        }

        //create pdf based on new content
        else{
            //new pdf selected, create new pdf based on info posted
            //create new link
            //initialize pdf and create write stream, file location
            const doc = new PDFDocument();
            var pdfName = newCareerContent.title + "_" + newCareerContent.company + ".pdf";
            var pdfLocation = path.join(__dirname, '../pdfs/' + pdfName);
            var pdfWriteSteam = fs.createWriteStream(pdfLocation);
            doc.pipe(pdfWriteSteam);

            //create pdf title
            doc.fontSize(24).text(newCareerContent.company + ',' + newCareerContent.title).moveDown();
            doc.fontSize(12);

            //array of headers to map param values
            let pdfHeaders = ['Company', 'Title', 'Position', 'City', 'State', 'Description'];
            let currentPdfText = "";

            //based on header, map param
            pdfHeaders.forEach(header => {
                switch(header){
                    case 'Company':
                        currentPdfText = header + ": " + newCareerContent.company;
                        doc.text(currentPdfText);
                        doc.moveDown(2);
                        break;
                    case 'Title':
                        currentPdfText = header + ": " + newCareerContent.title;
                        doc.text(currentPdfText);
                        doc.moveDown(2);
                        break;
                    case 'Position':
                        currentPdfText = header + ": " + newCareerContent.position;
                        doc.text(currentPdfText);
                        doc.moveDown(2);
                        break;
                    case 'City':
                        currentPdfText = header + ": " + newCareerContent.city;
                        doc.text(currentPdfText);
                        doc.moveDown(2);
                        break;
                    case 'State':
                        currentPdfText = header + ": " + newCareerContent.state;
                        doc.text(currentPdfText);
                        doc.moveDown(2);
                        break;
                    case 'Email':
                        currentPdfText = header + ": " + newCareerContent.email;
                        doc.text(currentPdfText);
                        doc.moveDown(2);
                        break;
                    case 'Description':
                        currentPdfText = header + ": " + newCareerContent.description;
                        doc.text(currentPdfText);
                        doc.moveDown(2);
                        break;
                    default:
                        break;
                }
            })

            //end creation of pdf
            doc.end();
            //when pdf finished, create mongo db record
            pdfWriteSteam.on('finish', () => {
                //replace mongo record with updated info
                let pdfLink = '/api/pdfs/?pdfName=' + pdfName;
                let sortDate = new Date();
                sortDate = moment(sortDate).tz('America/Los_Angeles').format('YYYY-MM-DD');

                newCareerContent['sortDate'] = sortDate;
                newCareerContent['link'] = pdfLink;

                //insert object into mongo db
                Positions.update({_id: id}, {...newCareerContent}, {overwrite: true}, (err, result) => {
                    if(err){
                        return res.status(500).json({
                            success: false,
                            message: "Error with mongo database"
                        })
                    }

                    return res.status(200).json({
                        success: true,
                        message: "Career successfully updated"
                    })
                })
            })
        }
    }
})

//delete career posting based on matching id
router.delete('/delete', (req, res) => {
    var id;

    if(req.query.params){
        id = req.query.params.id;
    }

    else if(req.query){
        id = req.query.id;
    }

    Positions.deleteOne({_id: id}, (err, result) => {
        if(err){
            console.log(err);
            return res.status(500).json({
                success: false,
                message: "Error with database"
            })
        }

        return res.status(200).json({
            success: true,
            message: "Posting deleted successfully"
        })
    })
})

module.exports = router;
