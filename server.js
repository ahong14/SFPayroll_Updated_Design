//require packages
var express = require('express');
var path = require('path');
var cors = require('cors')
var bodyParser = require('body-parser');

//mongoose, connect to mongoDB on mLab
var mongoose = require('mongoose');
mongoose.connect("mongodb://ahong14:aa12345@ds161804.mlab.com:61804/sfpayroll");
mongoose.connection.on('error', function(error) {
    console.error('Database connection error:', error);
});

//code sourced from https://spin.atomicobject.com/2018/05/15/extending-heroku-timeout-node/
//code to workaround heroku deployment 30second timeout
//sending emails takes longer than 30 seconds, heroku will timeout and return 503 service unavailable

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
  

//application, running express app
var app = express();

//parse body request
app.use(bodyParser.json());

//use cors;
app.use(cors());

//serve react files
app.use(express.static(path.join(__dirname, 'frontend/build')));

//use middleware
app.use(extendTimeoutMiddleware);


//routes
var router = express.Router();
var events = require('./routes/events');
var contact = require('./routes/contact');
var job = require('./routes/job');
var positions = require('./routes/positions');

app.use('/api/events', events);
app.use('/api//contact', contact);
app.use('/api/job', job);
app.use('/api/positions', positions);

//fix react app crashing on refresh
app.get('/*', (req,res) => {
  res.sendFile(path.join(__dirname + '/frontend/build/index.html'))
})

//listen to requests on port
//choose port based on environment
const PORT = process.env.PORT || 4000;
const server = app.listen(PORT);
server.timeout = 120000;
