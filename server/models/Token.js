const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//reference: https://codemoto.io/coding/nodejs/email-verification-node-express-mongodb
const TokenSchema = new Schema({
    user: {
        type: String
    },

    token: {
        type: String
    },

    createdAt: { 
        type: Date, 
        default: Date.now, 
        expires: 900
    }
})

module.exports = mongoose.model("token", TokenSchema);