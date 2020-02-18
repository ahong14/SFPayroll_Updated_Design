const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BulletinSchema = new Schema({
    month: {
        type: String
    },

    link: {
        
    }
})

module.exports = mongoose.model('bulletin', BulletinSchema);