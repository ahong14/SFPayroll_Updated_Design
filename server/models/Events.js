const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventSchema = new Schema({
    event:{
        type: String
    },

    date:{
        type: String
    },

    sortDate:{
      type: Date
    },

    time:{
        type: String
    },

    speakers:{
      type: String
    },

    Location:{
        type: String
    },

    registration:{
      type: String
    },

    lastEdited: {
      type: String,
      default: ''
    }
});

module.exports =  mongoose.model("events", EventSchema);
