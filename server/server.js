//require packages
const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
require('dotenv').config();
require('console-stamp')(console, { pattern: 'yyyy-mm-dd hh:mm:ss ' });

//mongoose, connect to mongoDB on mLab
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoReconnect: true,
    poolSize: 10,
    reconnectTries: 10,
    reconnectInterval: 2000
});

//log mongo connection events
mongoose.connection.on('open', () => {
    console.log('Connected to mongo successfully');
});

//connection failed
mongoose.connection.on('error', (error) => {
    console.error('Database connection error:', error);
    //if connection failed, kill process, restart within container
    //set delay before restarting process
    setTimeout(() => {
        console.error('Connection failed, killing current process, restarting');
        process.exit(0);
    }, 2000);
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
const admin = require('./routes/admin');
const images = require('./routes/images');
const bulletin = require('./routes/bulletin');

app.use('/api/events', events);
app.use('/api/contact', contact);
app.use('/api/job', job);
app.use('/api/positions', positions);
app.use('/api/pdfs', pdfs);
app.use('/api/admin', admin);
app.use('/api/images', images);
app.use('/api/bulletin', bulletin);

//serve images directory for gallery image sources
app.use('/api/imageSource', express.static(path.join(__dirname, '/images')));

//check if dev or production mode
//fix react app crashing on refresh
if (process.env.production) {
    app.get('/*', (req, res) => {
        res.sendFile(path.join(__dirname + '/../frontend/build/index.html'));
    });
}

//listen to requests on port
//choose port based on environment
const PORT = process.env.PORT || 4000;
app.listen(PORT);
