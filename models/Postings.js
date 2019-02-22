const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostingSchema = new Schema({
    link:{
        type: String
    },

    title:{
        type: String

    },

    city:{
        type: String
    },

    company:{
        type: String
    },

    date:{
        type: String
    },

    sortDate:{
      type: Date
    }
});

module.exports = mongoose.model("postings", PostingSchema);
