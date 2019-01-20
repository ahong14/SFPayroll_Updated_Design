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

//send email for contact us information
router.post('/contactUs', (req,resp) => {
    //mail options
    const contactUsOptions = {
        from: 'sfpayrollweb@gmail.com', // sender address
        to: 'sfpayrollweb@gmail.com', // list of receivers
        subject: 'Message From Visitor', // Subject line
        html: '<p>Name: ' + req.body.name + '\n' + 'Email: ' + req.body.email + '\n' + 'Message: ' + req.body.message + '</p>'
    }
    
    //send email for contact us
    transporter.sendMail(contactUsOptions, function (err, info) {
        if(err){
            console.err(err)
            resp.status(400);
        }
       
        else{
            resp.status(200);            
        }
    });
});

module.exports = router;