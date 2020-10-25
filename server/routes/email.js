const nodemailer = require('nodemailer');

//singleton defintion of nodemailer
//email options
const transporter = nodemailer.createTransport({
    secure: false, // use SSL
    service: 'gmail',
    auth: {
        type: 'OAuth2',
        user: process.env.EMAIL_USER,
        clientId: process.env.GMAIL_CLIENT_ID,
        clientSecret: process.env.GMAIL_CLIENT_SECRET,
        accessToken: process.env.GMAIL_ACCESS_TOKEN,
        refreshToken: process.env.GMAIL_REFRESH_TOKEN
    },
    tls: {
        rejectUnauthorized: false
    }
});

module.exports = transporter;