const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

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
router.post('/sendJob', (req,resp) => {
    var params = req.body.params;

    //send job email options
    const options = {
        from: process.env.EMAIL_USER, // sender address
        to: process.env.EMAIL_RECEIVER, // list of receivers
        subject: 'Job Posting', // Subject line
        html: ' <p> Email ' + params.email  + '</p>' + ' <p> Company '  + params.company + '</p>' +  'Title: ' + params.title  + '</p>' + 'City: ' + params.city  +  '</p>' +'State: ' + params.state  +  '</p>' + 'Position: ' + params.position  +  '</p>' + 'Description: ' + params.description + '</p>' + '<p>' + 'Payroll Position: ' + params.payrollPosition + '</p>'
    }
    
    //send email
    transporter.sendMail(options, function(err,info){
        if(err){
            console.log(err)
            resp.status(400).send("email failed to send");
        }
       
        else{
            console.log(info);
            resp.status(200).send("Job posting was sent to email!");            
        }
    });
});

module.exports = router;