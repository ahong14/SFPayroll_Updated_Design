const Admin = require('../models/Admin');
const Token = require('../models/Token');
const NewPasswordToken = require('../models/NewPasswordToken');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const transporter = require('../routes/email');
const saltRounds = 10;

class UserService {
    async findExisitingUser(userName) {
        try {
            return await Admin.findOne({ userName: userName }).exec();
        } catch (e) {
            console.error(e);
            throw new Error({
                success: false,
                message: 'Error with database',
                status: 500
            });
        }
    }

    async checkComparePassword(password, comparePassword) {
        try {
            const passwordResult = await bcrypt.compare(
                password,
                comparePassword
            );
            return !passwordResult ? false : passwordResult;
        } catch (e) {
            console.error(e);
            throw new Error({
                success: false,
                message: 'Error with password hashing',
                status: 500
            });
        }
    }

    async sendVerificationEmail(user, tokenValue) {
        //send email for verification
        const options = {
            from: process.env.EMAIL_USER, // sender address
            to: process.env.EMAIL_RECEIVER, // list of receivers
            subject: 'Signup Verification', // Subject line
            html: `<p> Hi ${user.firstName}, Please click the following link to complete verification process. http://sfpayroll.org/api/admin/authentication/${tokenValue} </p>`
        };

        await transporter.sendMail(options, (err, info) => {
            if (err) {
                console.error(err);
                throw new Error({
                    success: false,
                    message: 'Email failed to send',
                    status: 500
                });
            }
            console.log(info);
            throw new Error({
                success: false,
                message:
                    'Email not yet verified. Please check sfbac inbox for verification process.',
                status: 400
            });
        });
    }

    async verifyEmailCheck(user) {
        if (!user.emailVerified) {
            //create token and send email for verification for created user
            let tokenString = new Token();
            let tokenValue = crypto.randomBytes(16).toString('hex');
            tokenString.user = user.userName;
            tokenString.token = tokenValue;
            await tokenString.save();
            await this.sendVerificationEmail(user, tokenValue);
            return false;
        }
        return true;
    }

    generateToken(user) {
        let tokenPayload = {
            firstName: user.firstName,
            lastName: user.lastName,
            userName: user.userName
        };

        let token = jwt.sign(tokenPayload, process.env.JWT_SECRET, {
            expiresIn: 3600
        });

        return {
            token: token,
            tokenPayload: tokenPayload
        };
    }

    async loginUser(userName, password) {
        try {
            // check if user email exists
            const existingUserResult = await this.findExisitingUser(userName);
            if (!existingUserResult) {
                let userError = new Error('User error');
                userError.response = {
                    success: false,
                    message: 'Error. No user found',
                    status: 400
                };
                throw userError;
            }

            // check passwords match
            const passwordResult = await this.checkComparePassword(
                password,
                existingUserResult.password
            );

            if (!passwordResult) {
                let passwordError = new Error('Password error');
                passwordError.response = {
                    success: false,
                    message: 'Error. Invalid password provided',
                    status: 400
                };
                throw passwordError;
            }

            // verify user email has been verified
            const emailVerifyResult = await this.verifyEmailCheck(
                existingUserResult
            );
            if (!emailVerifyResult) {
                let emailVerifyError = new Error('Email verify error.');
                emailVerifyError.response = {
                    success: false,
                    message:
                        'Error. Email has not been verified yet. Verification email has been sent.',
                    status: 400
                };
                throw emailVerifyError;
            }
            let tokenResult = this.generateToken(existingUserResult);
            return tokenResult;
        } catch (e) {
            return e.response;
        }
    }
}

module.exports = UserService;
