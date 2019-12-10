const express = require('express');
const router = express.Router();
var nodemailer = require('nodemailer');

// code sourced from https://spin.atomicobject.com/2018/05/15/extending-heroku-timeout-node/
// code to workaround heroku deployment 30second timeout
// sending emails takes longer than 30 seconds, heroku will timeout and return 503 service unavailable

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
  
router.use(extendTimeoutMiddleware);

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

    //send job email options
    const options = {
        from: 'sfpayrollweb@gmail.com', // sender address
        to: 'sfbac.apa@gmail.com', // list of receivers
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