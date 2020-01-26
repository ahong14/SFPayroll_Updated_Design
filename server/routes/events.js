const express = require('express');
const router = express.Router();
const Events = require('../models/Events');
const redisClient = require('./redis');
const moment = require('moment');

//reference: https://www.codementor.io/@brainyfarm/caching-with-redis-node-js-example-h6o9ii72i
//get all upcoming events from database
//sort by date of events
router.get('/', (req, res) => {
  redisClient.get('events', (err, results) => {
    if(err){
      return res.status(500).json({
        success: false,
        message: "Error with redis"
      })
    }

    //cache hit
    else if(results){
      let eventsJSON = JSON.parse(results);
      return res.status(200).json(eventsJSON);
    }

    //cache miss
    else{
      Events.find({},null,{sort:{'sortDate':1}})
        .then(events => {
          //update redis cache
          //set key mapping events to db results
          //set expiration based on seconds
          redisClient.setex('events', 60, JSON.stringify(events));
          return res.status(200).json(events);
        })
        .catch(err => {
          return res.status(500).send("error with database");
        })
    }
  })
});

//create new event
router.post('/createEvent', (req, res) => {
  var event, date, time, speakers, location, registration;

  if(req.body.params){
    event = req.body.params.event;
    date = req.body.params.date;
    time = req.body.params.time;
    speakers = req.body.params.speakers;
    location = req.body.params.location;
    registration = req.body.params.registration;
  }

  else if(req.body){
    event = req.body.event;
    date = req.body.date;
    time = req.body.time;
    speakers = req.body.speakers;
    location = req.body.location;
    registration = req.body.registration;
  }

  var sortDate = moment(date).format('YYYY-MM-DD');
  date = moment(date).format('MMMM Do YYYY');

  Events.findOne({event: event}, (err, result) => {
    if(err){
      return res.status(500).json({
        success: false,
        message: "Error with database"
      })
    }

    if(result){
      return res.status(400).json({
        success: false,
        message: "Event name already exists"
      })
    }

    else{
      let newEvent = new Events();
      newEvent.event = event;
      newEvent.date = date;
      newEvent.time = time;
      newEvent.speakers = speakers;
      newEvent.Location = location;
      newEvent.registration = registration;
      newEvent.sortDate = sortDate;

      newEvent.save( (err) => {
        if(err){
          console.log(err);
          return res.status(500).json({
            success: false,
            message: "Error saving into database"
          })
        }

        return res.status(200).json({
          success: true,
          message: "Event successfully created"
        })
      })
    }
  })
})

module.exports = router;
