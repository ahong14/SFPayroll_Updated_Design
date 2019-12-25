//require packages
const express = require('express');
const path = require('path');
const cors = require('cors')
const bodyParser = require('body-parser');
require('dotenv').config();

//mongoose, connect to mongoDB on mLab
const mongoose = require('mongoose');
mongoose.connect(process.env.MLAB_URI, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection.on('error', function(error) {
    console.error('Database connection error:', error);
});

//TODO: remove heroku dependencies

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
const app = express();

//parse body request
app.use(bodyParser.json());

//use cors;
app.use(cors());

//serve react files
app.use(express.static(path.join(__dirname, '/../frontend/build')));

//use middleware
app.use(extendTimeoutMiddleware);

//routes
const events = require('./routes/events');
const contact = require('./routes/contact');
const job = require('./routes/job');
const positions = require('./routes/positions');
const pdfs = require('./routes/pdfs');

app.use('/api/events', events);
app.use('/api/contact', contact);
app.use('/api/job', job);
app.use('/api/positions', positions);
app.use('/api/pdfs', pdfs);

//fix react app crashing on refresh
app.get('/*', (req,res) => {
  res.sendFile(path.join(__dirname + '/../frontend/build/index.html'))
})

//listen to requests on port
//choose port based on environment
const PORT = process.env.PORT || 4000;
const server = app.listen(PORT);
server.timeout = 120000;