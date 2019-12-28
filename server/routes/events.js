const express = require('express');
const router = express.Router();
const Events = require('../models/Events');
const redisClient = require('./redis');

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

    else if(results){
      console.log("results found in cache");
      let eventsJSON = JSON.parse(results);
      return res.status(200).json(eventsJSON);
    }

    else{
      Events.find({},null,{sort:{'sortDate':1}})
        .then(events => {
          //update redis cache
          //set key mapping events to db results
          //set expiration based on seconds
          redisClient.setex('events', 300, JSON.stringify(events));
          return res.status(200).json(events);
        })
        .catch(err => {
          return res.status(500).send("error with database");
        })
    }
  })
});

module.exports = router;
