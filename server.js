//express server module
var express = require('express');

//application, running express app
var app = express();

var path = require('path');

//cors
var cors = require('cors')

//body parse for requests
var bodyParser = require('body-parser');

//send emails
var nodemailer = require('nodemailer');

//delay http
var delay = require('http-delayed-response');

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

//parse body request
app.use(bodyParser.json());

//use cors;
app.use(cors());

//serve files in public folder
app.use(express.static(path.join(__dirname, 'public')));

//delayed response middleware
app.use(function (req, res, next) {
    var delayed = new delay(req, res);
    delayed.json();
    next(delayed.start());
});

//send email for contact us information
app.post('/contactUs', (req,resp) => {

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
            console.log(err)
            resp.status(400);
        }
       
        else{
            resp.status(200);            
        }
    });
});

//email job posting
app.post('/sendJob', (req,resp) => {

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


//listen to requests on port
//choose port based on environment
const PORT = process.env.PORT || 3000;
const server = app.listen(PORT);
server.timeout = 120000;