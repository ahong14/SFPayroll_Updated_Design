const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventSchema = new Schema({
    event: {
        type: String
    },

    date: {
        type: String
    },

    sortDate: {
        type: Date
    },

    unixTimestamp: {
        type: Number
    },

    time: {
        type: String
    },

    speakers: {
        type: String
    },

    Location: {
        type: String
    },

    registration: {
        type: String,
        default: ''
    },

    lastEdited: {
        type: String,
        default: ''
    },

    description: {
        type: String,
        default: null
    }
});

module.exports = mongoose.model('events', EventSchema);
