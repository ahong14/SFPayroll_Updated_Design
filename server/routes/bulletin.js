const express = require('express');
const router = express.Router();
const Bulletin = require('../models/Bulletin');

// get latest bulletin
router.get('/', (req, res) => {
    Bulletin.find({}, (err, results) => {
        if (err) {
            console.log(err);
            return res.status(500).json({
                success: false,
                message: 'Error with database'
            });
        }

        return res.status(200).json({
            success: true,
            values: results
        });
    });
});

//edit
router.put('/', (req, res) => {
    var newBulletinUpdates;
    if (req.body.params) {
        newBulletinUpdates = req.body.params.newBulletinUpdates;
    } else if (req.body) {
        newBulletinUpdates = req.body.newBulletinUpdates;
    }

    Bulletin.findOneAndUpdate(
        { _id: newBulletinUpdates.id },
        { ...newBulletinUpdates },
        { overwrite: true },
        (err, result) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: false,
                    message: 'Error with database'
                });
            }

            return res.status(200).json({
                success: true,
                message: 'Bulletin updated successfully.'
            });
        }
    );
});

router.post('/createOne', (req, res) => {
    let newBulletin = new Bulletin();
    newBulletin.save((err) => {
        if (err) {
            return res.status(500).json({
                success: false,
                message: 'Error with database'
            });
        }

        return res.status(200).json({
            success: true,
            message: 'New bulletin created'
        });
    });
});

router.post('/createNew', (req, res) => {
    const { month, link } = req.body;
    let newBulletin = new Bulletin();
    newBulletin.month = month;
    newBulletin.link = link;
    newBulletin.createdDate = new Date();

    newBulletin.save((err, result) => {
        if (err) {
            return res.status(500).json({
                success: false,
                message: 'Error with database'
            });
        }

        return res.status(200).json({
            success: true,
            message: 'New bulletin created',
            result: result
        });
    });
});

module.exports = router;
