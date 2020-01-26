const express = require('express');
const router = express.Router();
const Admin = require('../models/Admin');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const saltRounds = 10;

//create new admin
router.post('/signup', (req, res) => {
    var firstName, lastName, userName, password;
    if(req.body.params){
        firstName = req.body.params.firstName;
        lastName = req.body.params.lastName;
        userName = req.body.params.userName;
        password = req.body.params.password;
    }

    else if(req.body){
        firstName = req.body.firstName;
        lastName = req.body.lastName;
        userName = req.body.userName;
        password = req.body.password;
    }

    Admin.findOne({userName: userName}, (err, result) => {
        if(err){
            return res.status(500).json({
                success: false,
                message: "Error with database"
            })
        }

        if(result){
            return res.status(400).json({
                success: false,
                message: "User name already exists"
            })
        }

        else{
            //hash password
            bcrypt.genSalt(saltRounds, (err, salt) => {
                bcrypt.hash(password, salt, (err, hashedPassword) => {
                    if(err){
                        return res.status(500).json({
                            success: false,
                            message: "Error with hashing password"
                        })
                    }

                    let newAdmin = new Admin();
                    newAdmin.password = hashedPassword;
                    newAdmin.userName = userName;
                    newAdmin.firstName = firstName;
                    newAdmin.lastName = lastName;
                    newAdmin.emailVerified = false;
                    newAdmin.save( (err) => {
                        if(err){
                            return res.status(500).json({
                                success: false,
                                message: "Error saving to db"
                            })
                        }

                        return res.status(200).json({
                            success: true,
                            message: "Admin created!"
                        })
                    })
                })
            })
        }
    })
})

router.post('/login', (req, res) => {
    var userName, password;

    if(req.body.params){
        userName = req.body.params.userName;
        password = req.body.params.password;
    }

    else if(req.body){
        userName = req.body.userName;
        password = req.body.password;
    }

    Admin.findOne({userName: userName}, (err, result) => {
        if(err){
            return res.status(500).json({
                success: false,
                message: "Error with database"
            })
        }

        else if(result){
            //compare submitted password and hashed password
            let comparePassword = result.password;
            bcrypt.compare(password, comparePassword, (err, match) => {
                if(err){
                    return res.status(500).json({
                        success: false,
                        message: "Error with password hashing"
                    })
                }

                if(match == false){
                    return res.status(400).json({
                        success: false,
                        message: "Error, passwords do not match"
                    })
                }

                //sign jwt for successful login
                else{
                    let tokenPayload = {
                        firstName: result.firstName,
                        lastName: result.lastName,
                        userName: result.userName
                    };

                    let token = jwt.sign(tokenPayload, process.env.JWT_SECRET, {
                        expiresIn: 3600
                    });

                    return res.status(200).json({
                        success: true,
                        message: "Login successful",
                        token: token
                    })
                }
            })
        }

        else{
            return res.status(400).json({
                success: false,
                message: "User name does not exist"
            })
        }
    })
})

module.exports = router;