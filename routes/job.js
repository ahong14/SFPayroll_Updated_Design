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
    var params = req.body.params;
    console.log(params);

    //send job email options
    const options = {
        from: 'sfpayrollweb@gmail.com', // sender address
        to: 'sfpayrollweb@gmail.com', // list of receivers
        subject: 'Job Posting', // Subject line
        html: '<p> Email ' + params.email + '\n' + 'Title: ' + params.title + '\n' + 'City: ' + params.city + '\n' + 'State: ' + params.state + '\n' + 'Position: ' + params.position + '\n' + 'Description: ' + params.description + '</p>'
    }
    
    //send email
    transporter.sendMail(options, function(err,info){
        if(err){
            console.log(err)
            resp.status(400).send("email failed to send");
        }
       
        else{
            resp.status(200).send("Job posting was sent to email!");            
        }
    });
});

module.exports = router;