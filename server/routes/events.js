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
        if (err) {
            return res.status(500).json({
                success: false,
                message: 'Error with redis'
            });
        }

        //cache hit
        else if (results) {
            let eventsJSON = JSON.parse(results);
            return res.status(200).json(eventsJSON);
        }

        //cache miss
        else {
            //sort events descending
            Events.find({}, null, { sort: { unixTimestamp: -1 } })
                .then((events) => {
                    //update redis cache
                    //set key mapping events to db results
                    //set expiration based on seconds
                    redisClient.setex('events', 15, JSON.stringify(events));
                    return res.status(200).json(events);
                })
                .catch((err) => {
                    return res.status(500).send('error with database');
                });
        }
    });
});

//create new event
router.post('/createEvent', (req, res) => {
    var event,
        date,
        time,
        speakers,
        location,
        registration,
        lastEdited,
        sortDate,
        description;

    if (req.body.params) {
        event = req.body.params.event;
        date = req.body.params.date;
        time = req.body.params.time;
        speakers = req.body.params.speakers;
        location = req.body.params.location;
        registration = req.body.params.registration;
        lastEdited = req.body.params.lastEdited;
        sortDate = req.body.params.sortDate;
        description = req.body.params.description;
    } else if (req.body) {
        event = req.body.event;
        date = req.body.date;
        time = req.body.time;
        speakers = req.body.speakers;
        location = req.body.location;
        registration = req.body.registration;
        lastEdited = req.body.lastEdited;
        sortDate = req.body.sortDate;
        description = req.body.description;
    }

    sortDate = moment(date).format('YYYY-MM-DD');
    date = moment(date).format('MMMM DD YYYY');
    var dateObject = new Date(sortDate);
    var timestamp = dateObject.getTime();

    Events.findOne({ event: event }, (err, result) => {
        if (err) {
            return res.status(500).json({
                success: false,
                message: 'Error with database'
            });
        }

        if (result) {
            return res.status(400).json({
                success: false,
                message: 'Event name already exists'
            });
        } else {
            //create new event record based on params sent
            let newEvent = new Events();
            newEvent.event = event;
            newEvent.date = date;
            newEvent.time = time;
            newEvent.speakers = speakers;
            newEvent.Location = location;
            newEvent.registration = registration;
            newEvent.sortDate = sortDate;
            newEvent.lastEdited = lastEdited;
            newEvent.unixTimestamp = timestamp;
            newEvent.description = description ? description : null;

            //save new event
            newEvent.save((err) => {
                if (err) {
                    console.log(err);
                    return res.status(500).json({
                        success: false,
                        message: 'Error saving into database'
                    });
                }

                return res.status(200).json({
                    success: true,
                    message: 'Event successfully created'
                });
            });
        }
    });
});

//edit event
router.put('/edit', (req, res) => {
    var newEventUpdates = {};
    var event;
    if (req.body.params) {
        newEventUpdates = { ...req.body.params.newEdits };
        event = req.body.params.originalEventTitle;
    } else if (req.body) {
        newEventUpdates = { ...req.body.newEdits };
        event = req.body.originalEventTitle;
    }

    //find event with original name
    //replace record with updated fields
    //reference: https://stackoverflow.com/questions/40709695/mongoose-equivalences-for-updateone-and-replaceone-mongo-native-drivers-restfu
    Events.update(
        { event: event },
        { ...newEventUpdates },
        { overwrite: true },
        (err, result) => {
            if (err) {
                return res.status(500).json({
                    success: false,
                    message: 'Error with database'
                });
            }

            //update result with new edits
            if (result) {
                return res.status(200).json({
                    success: true,
                    message: 'Event updated successfully.'
                });
            }

            //no result found
            else {
                return res.status(400).json({
                    success: false,
                    message: 'Event not found'
                });
            }
        }
    );
});

//delete event
router.delete('/delete', (req, res) => {
    var event;
    if (req.query.params) {
        event = req.query.params.event;
    } else if (req.query) {
        event = req.query.event;
    }

    //find event by event name and delete from database
    Events.deleteOne({ event: event }, (err, result) => {
        if (err) {
            return res.status(500).json({
                success: false,
                message: 'Error with database'
            });
        }

        return res.status(200).json({
            success: true,
            message: 'Event deleted successfully.'
        });
    });
});

module.exports = router;
