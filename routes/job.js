const express = require('express');
const router = express.Router();
var nodemailer = require('nodemailer');

//email options
var transporter = nodemailer.createTransport({
    secure: false, // use SSL
    service: 'gmail',
    auth: {
           user: 'sfpayrollweb@gmail.com',
           pass: 'sfpayroll123'
    },
    tls: {
        rejectUnauthorized: false
    }
});

//email job posting
router.post('/sendJob', (req,resp) => {
    //send job email options
    const options = {
        from: 'sfpayrollweb@gmail.com', // sender address
        to: 'sfpayrollweb@gmail.com', // list of receivers
        subject: 'Job Posting', // Subject line
        html: '<p> Position: ' + req.body.position + '\n' + 'City: ' + req.body.city + '\n' + 'State: ' + req.body.state + '\n'  + 'Description: ' + req.body.description + '</p>'
    }

    //send email
    transporter.sendMail(options, function(err,info){
        if(err){
            console.log(err)
            resp.status(400);
        }
       
        else{
            resp.status(200);            
        }
    });
});