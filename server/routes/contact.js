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

//send email for contact us information
router.post('/contactUs', (req,resp) => {
    var params = req.body.params;
    //mail options
    const contactUsOptions = {
        from: process.env.EMAIL_USER, // sender address
        to: process.env.EMAIL_RECEIVER, // list of receivers
        subject: 'Message From Visitor', // Subject line
        html: '<p>Name: ' + params.name + '\n' + 'Email: ' + params.email + '\n' + 'Message: ' + params.message + '</p>'
    }
    
    //send email for contact us
    transporter.sendMail(contactUsOptions, function (err, info) {
        if(err){
          console.error(err)
          resp.status(400).send("Email wasn't sent");
        }
       
        else{
          console.log(info);
          resp.status(200).send("Thank you! Message was sent");            
        }
    });
});

module.exports = router;