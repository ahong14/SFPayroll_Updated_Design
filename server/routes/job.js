const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const path = require('path');
const fs = require('fs');
const moment = require('moment-timezone');
const PDFDocument = require('pdfkit');
const Positions = require('../models/Postings');

//email options
const transporter = nodemailer.createTransport({
    secure: false, // use SSL
    service: 'gmail',
    auth: {
           user: process.env.EMAIL_USER,
           pass: process.env.EMAIL_PASS
    },
    tls: {
        rejectUnauthorized: false
    }
});

//email job posting
router.post('/sendJob', (req,res) => {
    var params;

    if(req.body.params){
        params = req.body.params;
    }

    else if(req.body){
        params = req.body;
    }

    //send job email options
    const options = {
        from: process.env.EMAIL_USER, // sender address
        to: process.env.EMAIL_RECEIVER, // list of receivers
        subject: 'Job Posting', // Subject line
        html: ' <p> Email ' + params.email  + '</p>' + ' <p> Company '  + params.company + '</p>' +  '<p>' + 'Title: ' + params.title  + '</p>' + '<p>' + 'City: ' + params.city  +  '</p>' + '<p>' + 'State: ' + params.state  +  '</p>' + '<p>' + 'Position: ' + params.position  +  '</p>' + 'Payroll Position: ' + params.payrollPosition + '</p>' + '<p>' + 'Description: ' + params.description + '</p>'
    }

    //initialize pdf and create write stream, file location
    const doc = new PDFDocument();
    var pdfName = params.title + "_" + params.company + ".pdf";
    var pdfLocation = path.join(__dirname, '../pdfs/' + pdfName);
    var pdfWriteSteam = fs.createWriteStream(pdfLocation);
    doc.pipe(pdfWriteSteam);

    //create pdf title
    doc.fontSize(24).text(params.company + ',' + params.title).moveDown();
    doc.fontSize(12);

    //array of headers to map param values
    let pdfHeaders = ['Company', 'Title', 'Position', 'City', 'State', 'Email', 'Description'];
    let currentPdfText = "";

    //based on header, map param
    pdfHeaders.forEach(header => {
        switch(header){
            case 'Company':
                currentPdfText = header + ": " + params.company;
                doc.text(currentPdfText);
                doc.moveDown(2);
                break;
            case 'Title':
                currentPdfText = header + ": " + params.title;
                doc.text(currentPdfText);
                doc.moveDown(2);
                break;
            case 'Position':
                currentPdfText = header + ": " + params.payrollPosition;
                doc.text(currentPdfText);
                doc.moveDown(2);
                break;

            case 'City':
                currentPdfText = header + ": " + params.city;
                doc.text(currentPdfText);
                doc.moveDown(2);
                break;

            case 'State':
                currentPdfText = header + ": " + params.state;
                doc.text(currentPdfText);
                doc.moveDown(2);
                break;

            case 'Email':
                currentPdfText = header + ": " + params.email;
                doc.text(currentPdfText);
                doc.moveDown(2);
                break;

            case 'Description':
                currentPdfText = header + ": " + params.description;
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
        //generate new posting record as db entry
        let newPosition = {};
        let pdfLink = process.env.HOST + '/api/pdfs/?pdfName=' + pdfName;
        let positionDate = new Date();
        let sortDate = new Date();
        positionDate = moment(positionDate).tz('America/Los_Angeles').format('MM/DD/YYYY');
        sortDate = moment(sortDate).tz('America/Los_Angeles').format('YYYY-MM-DD');

        newPosition['title'] = params.title;
        newPosition['city'] = params.city;
        newPosition['company'] = params.company;
        newPosition['date'] = positionDate;
        newPosition['sortDate'] = sortDate;
        newPosition['link'] = pdfLink;

        //insert object into mongo db
        Positions.create(newPosition, (err, result) => {
            if(err){
                return res.status(500).json({
                    success: false,
                    message: "Error with mongo database"
                })
            }

            console.log(result);
            //send email notifying new job was posted 
            transporter.sendMail(options, (err,info) => {
                if(err){
                    console.log(err)
                    res.status(500).send("email failed to send");
                }
            
                else{
                    console.log(info);
                    res.status(200).send("Job posting successfully created! Refresh to view new posting");            
                }
            });
        })
    })
});

module.exports = router;