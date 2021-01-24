const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BulletinSchema = new Schema({
    month: {
        type: String,
        default: ''
    },

    link: {
        type: String,
        default: ''
    },

    lastEdited: {
        type: String,
        default: ''
    },

    linkReady: {
        type: Boolean,
        default: false
    },

    createdDate: {
        type: Date
    }
});

module.exports = mongoose.model('bulletin', BulletinSchema);
