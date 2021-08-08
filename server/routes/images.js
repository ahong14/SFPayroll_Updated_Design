const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const imageDirectory = path.join(__dirname, '/../images');
const imageSlidesDirectory = path.join(__dirname, '/../images/as_time_goes_by');
const AwsService = require('../services/aws');
const redisClient = require('./redis');

const HOURS_SECONDS = 3600;

// route to get award image urls from S3 bucket
router.get('/awards', (req, res) => {
    const { year } = req.query.params || req.query;
    redisClient.get(`award_images_${year}`, async (err, result) => {
        if (err) {
            return res.status(500).json({
                success: false,
                message: 'Error with redis'
            });
        } else if (result) {
            return res.status(200).json(JSON.parse(result));
        } else {
            const awsService = new AwsService();
            result = await awsService.getAwardImages(year);
            if (result) {
                redisClient.setex(
                    `award_images_${year}`,
                    HOURS_SECONDS,
                    JSON.stringify(result)
                );
                return res.status(200).json({
                    success: true,
                    result: result
                });
            }
            return res.status(500).json({
                success: false,
                message: 'Error retrieving urls from S3'
            });
        }
    });
});

//api route to return list of images in image directory
//param - indicates directory name to read file images from
router.get('/slidesFolder/:folder', (req, res) => {
    var folder = req.params.folder;
    let targetImageDirectory = path.join(imageSlidesDirectory, `/${folder}`);
    fs.readdir(targetImageDirectory, (err, images) => {
        if (err) {
            return res.status(500).json({
                success: false,
                message: 'Error with server'
            });
        }

        return res.status(200).json({
            success: true,
            directory: folder,
            images: images
        });
    });
});

router.get('/:folder', (req, res) => {
    var folder = req.params.folder;
    let targetImageDirectory = path.join(imageDirectory, `/${folder}`);
    fs.readdir(targetImageDirectory, (err, images) => {
        if (err) {
            return res.status(500).json({
                success: false,
                message: 'Error with server'
            });
        }

        return res.status(200).json({
            success: true,
            images: images
        });
    });
});

module.exports = router;
