//express server module
var express = require('express');

//application, running express app
var app = express();

var path = require('path');

//cors
var cors = require('cors')

//body parse for requests
var bodyParser = require('body-parser');

app.use(bodyParser.json());


var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
           user: 'sfpayrollweb@gmail.com',
           pass: 'sfpayroll123'
       }
   });

//use cors;
app.use(cors());



//serve files in public folder
app.use(express.static(path.join(__dirname, 'public')));

//choose port based on environment
const PORT = process.env.PORT || 8080;


//send email
app.post('/contactUs', (req,resp) => {
    console.log(req.body);
    const contactUsOptions = {
        from: 'sfpayrollweb@gmail.com', // sender address
        to: 'sfpayrollweb@gmail.com', // list of receivers
        subject: 'Message From Visitor', // Subject line
        html: '<p>Name: ' + req.body.name + '\n' + 'Email: ' + req.body.email + '\n' + 'Message: ' + req.body.message + '</p>'
    }


    //send email for contact us
    //NEED TO FIX
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


//listen to requests on port
app.listen(PORT);


