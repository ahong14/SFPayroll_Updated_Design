const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NewPasswordTokenSchema = new Schema({
    user: {
        type: String
    },

    token: {
        type: String
    },

    password: {
        type: String
    },

    createdAt: {
        type: Date,
        default: Date.now,
        expires: 900
    }
})

module.exports = mongoose.model('newPasswordToken', NewPasswordTokenSchema);