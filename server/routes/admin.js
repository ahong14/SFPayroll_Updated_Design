const express = require('express');
const router = express.Router();
const Admin = require('../models/Admin');
const Token = require('../models/Token');
const NewPasswordToken = require('../models/NewPasswordToken');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const transporter = require('./email');
const saltRounds = 10;

//create new admin
router.post('/signup', (req, res) => {
    var firstName, lastName, userName, password;
    if (req.body.params) {
        firstName = req.body.params.firstName;
        lastName = req.body.params.lastName;
        userName = req.body.params.userName;
        password = req.body.params.password;
    } else if (req.body) {
        firstName = req.body.firstName;
        lastName = req.body.lastName;
        userName = req.body.userName;
        password = req.body.password;
    }

    Admin.findOne({ userName: userName }, (err, result) => {
        if (err) {
            return res.status(500).json({
                success: false,
                message: 'Error with database'
            });
        }

        if (result) {
            return res.status(400).json({
                success: false,
                message: 'User name already exists'
            });
        } else {
            //hash password
            bcrypt.genSalt(saltRounds, (err, salt) => {
                bcrypt.hash(password, salt, (err, hashedPassword) => {
                    if (err) {
                        return res.status(500).json({
                            success: false,
                            message: 'Error with hashing password'
                        });
                    }

                    let newAdmin = new Admin();
                    newAdmin.password = hashedPassword;
                    newAdmin.userName = userName;
                    newAdmin.firstName = firstName;
                    newAdmin.lastName = lastName;
                    newAdmin.emailVerified = false;
                    newAdmin.save((err) => {
                        if (err) {
                            return res.status(500).json({
                                success: false,
                                message: 'Error saving to db'
                            });
                        }
                        //reference: https://codemoto.io/coding/nodejs/email-verification-node-express-mongodb
                        //create token and send email for verification for created user
                        let tokenString = new Token();
                        let tokenValue = crypto.randomBytes(16).toString('hex');
                        tokenString.user = userName;
                        tokenString.token = tokenValue;
                        tokenString.save((err) => {
                            if (err) {
                                return res.status(500).json({
                                    success: false,
                                    message: 'Error saving to db'
                                });
                            }
                            //send email for verification
                            const options = {
                                from: process.env.EMAIL_USER, // sender address
                                to: process.env.EMAIL_RECEIVER, // list of receivers
                                subject: 'Signup Verification', // Subject line
                                html: `<p> Hi ${firstName}, Please click the following link to complete verification process. http://sfpayroll.org/api/admin/authentication/${tokenValue} </p>`
                            };

                            transporter.sendMail(options, (err, info) => {
                                if (err) {
                                    console.log(err);
                                    res.status(500).send(
                                        'email failed to send'
                                    );
                                } else {
                                    console.log(info);
                                    return res.status(200).json({
                                        success: true,
                                        message:
                                            'Email was sent for verification, check sfbac email to proceed'
                                    });
                                }
                            });
                        });
                    });
                });
            });
        }
    });
});

//authenticate logged in user based on token in request param
router.get('/authentication/:token', (req, res) => {
    var token = req.params.token;
    Token.findOne({ token: token }, (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).json({
                success: false,
                message: 'Error with database'
            });
        }

        //token was found, find user and set boolean verified to true
        if (result) {
            let userName = result.user;
            Admin.findOneAndUpdate(
                { userName: userName },
                { emailVerified: true },
                (err, result) => {
                    if (err) {
                        console.log(err);
                        return res.status(500).json({
                            success: false,
                            message: 'Error with database'
                        });
                    }

                    //success email options
                    const options = {
                        from: process.env.EMAIL_USER, // sender address
                        to: process.env.EMAIL_RECEIVER, // list of receivers
                        subject: 'Signup Verification Success', // Subject line
                        html: `<p> Hi ${result.firstName}, Your account was succesfully verified, please login. </p>`
                    };

                    //send email to for success message
                    transporter.sendMail(options, (err, info) => {
                        if (err) {
                            console.log(err);
                            res.status(500).send('email failed to send');
                        } else {
                            console.log(info);
                            return res.redirect('/Admin');
                        }
                    });
                }
            );
        } else {
            //handle logic for expired token
            //reference: https://codemoto.io/coding/nodejs/email-verification-node-express-mongodb
            //create token and send email for verification for created user
            let tokenString = new Token();
            let tokenValue = crypto.randomBytes(16).toString('hex');
            tokenString.token = tokenValue;
            tokenString.save((err) => {
                if (err) {
                    return res.status(500).json({
                        success: false,
                        message: 'Error saving to db'
                    });
                }
                //send email for verification
                const options = {
                    from: process.env.EMAIL_USER, // sender address
                    to: process.env.EMAIL_RECEIVER, // list of receivers
                    subject: 'Signup Verification', // Subject line
                    html: `<p> Please click the following link to complete verification process. http://sfpayroll.org/api/admin/authentication/${tokenValue} </p>`
                };

                transporter.sendMail(options, (err, info) => {
                    if (err) {
                        console.log(err);
                        res.status(500).send('email failed to send');
                    } else {
                        console.log(info);
                        return res.redirect('/TokenExpiration');
                    }
                });
            });
        }
    });
});

router.post('/login', (req, res) => {
    var userName, password;

    if (req.body.params) {
        userName = req.body.params.userName;
        password = req.body.params.password;
    } else if (req.body) {
        userName = req.body.userName;
        password = req.body.password;
    }

    Admin.findOne({ userName: userName }, (err, result) => {
        if (err) {
            return res.status(500).json({
                success: false,
                message: 'Error with database'
            });
        } else if (result) {
            //compare submitted password and hashed password
            let comparePassword = result.password;
            bcrypt.compare(password, comparePassword, (err, match) => {
                if (err) {
                    console.log(err);
                    return res.status(500).json({
                        success: false,
                        message: 'Error with password hashing'
                    });
                }

                if (match === false) {
                    return res.status(400).json({
                        success: false,
                        message: 'Error, passwords do not match'
                    });
                }

                //if email not verified, send email
                else if (result.emailVerified === false) {
                    //create token and send email for verification for created user
                    let tokenString = new Token();
                    let tokenValue = crypto.randomBytes(16).toString('hex');
                    tokenString.user = result.userName;
                    tokenString.token = tokenValue;
                    tokenString.save((err) => {
                        if (err) {
                            return res.status(500).json({
                                success: false,
                                message: 'Error saving to db'
                            });
                        }
                        //send email for verification
                        const options = {
                            from: process.env.EMAIL_USER, // sender address
                            to: process.env.EMAIL_RECEIVER, // list of receivers
                            subject: 'Signup Verification', // Subject line
                            html: `<p> Hi ${result.firstName}, Please click the following link to complete verification process. http://sfpayroll.org/api/admin/authentication/${tokenValue} </p>`
                        };

                        transporter.sendMail(options, (err, info) => {
                            if (err) {
                                console.log(err);
                                res.status(500).send('email failed to send');
                            } else {
                                console.log(info);
                                return res.status(200).json({
                                    success: false,
                                    message:
                                        'Email not yet verified. Please check sfbac inbox for verification process.'
                                });
                            }
                        });
                    });
                }

                //sign jwt for successful login
                else {
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
                        message: 'Login successful',
                        token: token,
                        payload: tokenPayload
                    });
                }
            });
        } else {
            return res.status(400).json({
                success: false,
                message: 'User name does not exist'
            });
        }
    });
});

router.post('/resetPassword', (req, res) => {
    var userName, newPassword;
    if (req.body.params) {
        userName = req.body.params.userName;
        newPassword = req.body.params.newPassword;
    } else if (req.body) {
        userName = req.body.userName;
        newPassword = req.body.newPassword;
    }

    //find if username exists
    Admin.findOne({ userName: userName }, (err, result) => {
        if (err) {
            return res.status(500).json({
                success: false,
                message: 'Error with database'
            });
        }

        //result was found
        else if (result) {
            //hash password, then save to password token
            bcrypt.genSalt(saltRounds, (err, salt) => {
                if (err) {
                    return res.status(500).json({
                        success: false,
                        message: 'Error hashing password'
                    });
                }

                //hash plain text password, generate new password token
                bcrypt.hash(newPassword, salt, (err, hashedPassword) => {
                    if (err) {
                        return res.status(500).json({
                            success: false,
                            message: 'Error hashing password'
                        });
                    }

                    //create new password token
                    let passwordToken = new NewPasswordToken();
                    passwordToken.user = userName;
                    passwordToken.password = hashedPassword;
                    let tokenValue = crypto.randomBytes(16).toString('hex');
                    passwordToken.token = tokenValue;

                    passwordToken.save((err) => {
                        if (err) {
                            return res.status(500).json({
                                success: false,
                                message: 'Error with database'
                            });
                        }

                        //send email to for user to confirm
                        //send email for verification
                        const options = {
                            from: process.env.EMAIL_USER, // sender address
                            to: process.env.EMAIL_RECEIVER, // list of receivers
                            subject: 'Reset Password Verification', // Subject line
                            html: `<p> Reset password for ${userName}. Please click the following link to complete verification process. http://sfpayroll.org/api/admin/resetPasswordAuth/${tokenValue} </p>`
                        };

                        transporter.sendMail(options, (err, info) => {
                            if (err) {
                                console.log(err);
                                res.status(500).send('email failed to send');
                            } else {
                                console.log(info);
                                return res.status(200).json({
                                    success: false,
                                    message:
                                        'Verification request sent. Please check sfbac inbox for reset instructions.'
                                });
                            }
                        });
                    });
                });
            });
        } else {
            return res.status(400).json({
                success: false,
                message: 'User name does not exist'
            });
        }
    });
});

//auth route for token based on email sent
router.get('/resetPasswordAuth/:token', (req, res) => {
    let token = req.params.token;
    NewPasswordToken.find({ token: token }, (err, result) => {
        if (err) {
            return res.status(500).json({
                success: false,
                message: 'Error with database'
            });
        }

        //extract user and password from token, updated admin record
        else if (result) {
            let userName = result[0].user;
            let newPassword = result[0].password;
            Admin.findOneAndUpdate(
                { userName: userName },
                { $set: { password: newPassword } },
                (err, result) => {
                    if (err) {
                        return res.status(500).json({
                            success: false,
                            message: 'Error with database'
                        });
                    }

                    return res.redirect('/ResetSuccess');
                }
            );
        }
    });
});

module.exports = router;
