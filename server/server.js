//require packages
const express = require('express');
const path = require('path');
const cors = require('cors')
const bodyParser = require('body-parser');
const morgan = require('morgan');
require('dotenv').config();

//mongoose, connect to mongoDB on mLab
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection.on('error', function(error) {
    console.error('Database connection error:', error);
});

//application, running express app
const app = express();

//parse body request
app.use(bodyParser.json());

//use cors;
app.use(cors());

//morgan loggin
app.use(morgan('combined'));

//serve react files
app.use(express.static(path.join(__dirname, '/../frontend/build')));

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

//check if dev or production mode
//fix react app crashing on refresh
if(process.env.production){
  app.get('/*', (req,res) => {
    res.sendFile(path.join(__dirname + '/../frontend/build/index.html'))
  })
}

//listen to requests on port
//choose port based on environment
const PORT = process.env.PORT || 4000;
const server = app.listen(PORT);
