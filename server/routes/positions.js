const express = require('express');
const router = express.Router();
const Positions = require('../models/Postings');
const redisClient = require('./redis');

//get all available job postings from database
router.get('/getPostings', (req,res) => {
    //check cache for postings
    redisClient.get('postings', (err, results) => {
        if(err){
            return res.status(500).json({
                success: false,
                message: "Error with redis"
            })
        }

        else if(results){
            let postingsJSON = JSON.parse(results);
            return res.status(200).json(postingsJSON);
        }

        else{
            Positions.find({},null,{sort:{'sortDate':-1}})
                .then(positions => {
                    //update cache with postings results
                    //set expiration
                    redisClient.setex('postings', 300, JSON.stringify(positions))
                    return res.status(200).send(positions);
                })
                .catch(err => {
                    return res.status(500).send("Error with database");
                })
        }
    })

})

module.exports = router;
