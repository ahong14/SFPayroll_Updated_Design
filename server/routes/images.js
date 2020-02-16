const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const imageDirectory = path.join(__dirname, '/../images');

//api route to return list of images in image directory
//param - indicates directory name to read file images from
router.get('/:folder', (req, res) => {
    var folder = req.params.folder;
    let targetImageDirectory = path.join(imageDirectory, `/${folder}`);
    fs.readdir(targetImageDirectory, (err, images) => {
        if(err){
            return res.status(500).json({
                success: false,
                message: "Error with server"
            })
        }

        return res.status(200).json({
            success: true,
            images: images
        })
    })
})

module.exports = router;