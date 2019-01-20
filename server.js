//express server module
var express = require('express');
var path = require('path');
//cors
var cors = require('cors')
//body parse for requests
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.connect("mongodb://ahong14:aa12345@ds161804.mlab.com:61804/sfpayroll");
mongoose.connection.on('error', function(error) {
    console.error('Database connection error:', error);
});

//application, running express app
var app = express();

//parse body request
app.use(bodyParser.json());

//use cors;
app.use(cors());

//serve files in public folder
app.use(express.static(path.join(__dirname, 'public')));

//routes
var router = express.Router();
var events = require('./routes/events');
var contact = require('./routes/contact');
var job = require('./routes/job');


app.use('/events', events);
app.use('/contact', contact);
app.use('/job', job);

//code sourced from https://spin.atomicobject.com/2018/05/15/extending-heroku-timeout-node/
//code to workaround heroku deployment 30second timeout
//sending emails takes longer than 30 seconds, herokue will timeout and return 503 service unavailable

// const extendTimeoutMiddleware = (req, resp, next) => {
//     const space = ' ';
//     let isFinished = false;
//     let isDataSent = false;

//     resp.once('finish', () => {
//       isFinished = true;
//     });
  
//     resp.once('end', () => {
//       isFinished = true;
//     });
  
//     resp.once('close', () => {
//       isFinished = true;
//     });
  
//     resp.on('data', (data) => {
//       // Look for something other than our blank space to indicate that real
//       // data is now being sent back to the client.
//       if (data !== space) {
//         isDataSent = true;
//       }
//     });
  
//     const waitAndSend = () => {
//       setTimeout(() => {
//         // If the response hasn't finished and hasn't sent any data back....
//         if (!isFinished && !isDataSent) {
//           // Need to write the status code/headers if they haven't been sent yet.
//           if (!resp.headersSent) {
//             resp.writeHead(202);
//           }
  
//           resp.write(space);
  
//           // Wait another 15 seconds
//           waitAndSend();
//         }
//       }, 15000);
//     };
  
//     waitAndSend();
//     next();
//   };
  
//   app.use(extendTimeoutMiddleware);

//listen to requests on port
//choose port based on environment
const PORT = process.env.PORT || 4000;
const server = app.listen(PORT);
server.timeout = 120000;