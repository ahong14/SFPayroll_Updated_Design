const nodemailer = require('nodemailer');

//singleton defintion of nodemailer
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

module.exports = transporter;