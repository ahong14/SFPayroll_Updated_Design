const express = require('express');
const router = express.Router();
const transporter = require('./email');
const fs = require('fs');
const { google } = require('googleapis');

//send email for contact us information
router.post('/contactUs', (req, res) => {
    var params = req.body.params;
    //mail options
    const contactUsOptions = {
        from: process.env.EMAIL_USER, // sender address
        to: process.env.EMAIL_RECEIVER, // list of receivers
        subject: 'Message From Visitor', // Subject line
        html:
            '<p>Name: ' +
            params.name +
            '<p>' +
            '<p>Email: ' +
            params.email +
            '</p>' +
            '<p>Message: ' +
            params.message +
            '</p>' +
            '<p> This is an auto-generated email. Please respond directly to email provided </p>'
    };

    //send email for contact us
    transporter.sendMail(contactUsOptions, (err, info) => {
        if (err) {
            console.error(err);
            return res.status(400).send("Error, Email wasn't sent");
        }

        return res.status(200).send('Thank you! Message was sent');
    });
});

module.exports = router;
