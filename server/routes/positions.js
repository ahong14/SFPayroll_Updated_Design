const express = require('express');
const router = express.Router();
const Positions = require('../models/Postings');

//get all available job postings from database
router.get('/getPostings', (req,resp) => {
    Positions.find({},null,{sort:{'sortDate':-1}})
        .then(positions => {
            return resp.status(200).send(positions);
        })
        .catch(err => {
            return resp.status(500).send("Error with database");
        })
})

module.exports = router;
