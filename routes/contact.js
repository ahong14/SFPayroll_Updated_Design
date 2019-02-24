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
            console.error(err)
            resp.status(400).send("Email wasn't sent");
        }
       
        else{
            resp.status(200).send("Thank you! Message was sent");            
        }
    });
});

module.exports = router;