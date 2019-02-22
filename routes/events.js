const express = require('express');
const router = express.Router();
const Events = require('../models/Events');

//get all upcoming events from database
//sort by date of events
router.get('/', (req,resp) => {
    Events.find({},null,{sort:{'sortDate':1}})
      .then(events => {
        return resp.status(200).json(events);
      })
      .catch(err => {
        return resp.status(500).send("error with database");
      })
});

module.exports = router;
