const express = require('express');
const router = express.Router();
const Events = require('../models/Events');

//send all events
router.get('/', (req,resp) => {
    Events.find()
        .then(events =>{
            resp.status(200).json(events);
        })
        .catch(err => {
            resp.status(500).send("error with database");
        })
});

module.exports = router;