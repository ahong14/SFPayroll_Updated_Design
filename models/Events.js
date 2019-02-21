const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventSchema = new Schema({
    event:{
        type: String
    },

    date:{
        type: String

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
    }
});

module.exports =  mongoose.model("events", EventSchema);