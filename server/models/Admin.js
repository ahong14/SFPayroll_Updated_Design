const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AdminSchema = new Schema({
    firstName: {
        type: String
    },

    lastName: {
        type: String
    },

    userName: {
        type: String
    },

    password: {
        type: String
    },

    emailVerified: {
        type: Boolean
    }
})

module.exports = mongoose.model("admin", AdminSchema);