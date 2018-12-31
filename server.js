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
// app.use(function (req, res, next) {
//     console.log("in middleware");
//     var delayed = new delay(req, res);
//     delayed.json();
//     next(delayed.start());
// });

//code sourced from https://spin.atomicobject.com/2018/05/15/extending-heroku-timeout-node/
const extendTimeoutMiddleware = (req, resp, next) => {
    const space = ' ';
    let isFinished = false;
    let isDataSent = false;

    resp.once('finish', () => {
      isFinished = true;
    });
  
    resp.once('end', () => {
      isFinished = true;
    });
  
    resp.once('close', () => {
      isFinished = true;
    });
  
    resp.on('data', (data) => {
      // Look for something other than our blank space to indicate that real
      // data is now being sent back to the client.
      if (data !== space) {
        isDataSent = true;
      }
    });
  
    const waitAndSend = () => {
      setTimeout(() => {
        // If the response hasn't finished and hasn't sent any data back....
        if (!isFinished && !isDataSent) {
          // Need to write the status code/headers if they haven't been sent yet.
          if (!resp.headersSent) {
            resp.writeHead(202);
          }
  
          resp.write(space);
  
          // Wait another 15 seconds
          waitAndSend();
        }
      }, 15000);
    };
  
    waitAndSend();
    next();
  };
  
  app.use(extendTimeoutMiddleware);

//send email for contact us information
app.post('/contactUs', (req,resp) => {

    console.log("in contact us");
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

    console.log("in send job");
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