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
    var params = req.body.params;
    console.log(req.body);
    //mail options
    const contactUsOptions = {
        from: 'sfpayrollweb@gmail.com', // sender address
        to: 'sfpayrollweb@gmail.com', // list of receivers
        subject: 'Message From Visitor', // Subject line
        html: '<p>Name: ' + params.name + '\n' + 'Email: ' + params.email + '\n' + 'Message: ' + params.message + '</p>'
    }
    
    //send email for contact us
    transporter.sendMail(contactUsOptions, function (err, info) {
        if(err){
            console.err(err)
            resp.status(400).send("Email wasn't sent");
        }
       
        else{
            resp.status(200).send("Thank you! Message was sent");            
        }
    });
});

module.exports = router;