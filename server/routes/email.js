const nodemailer = require('nodemailer');

//singleton defintion of nodemailer
//email options
// https://nodemailer.com/smtp/oauth2/
const transporter = nodemailer.createTransport({
    secure: false, // use SSL
    host: 'smtp.gmail.com',
    auth: {
        user: process.env.EMAIL_USER,
        type: 'OAuth2',
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
