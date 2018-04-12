var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var Team = new Schema({
    _id: {
        type: Number
    },
    key: {
        type: String
    },
    name: {
        type: String
    },
    code: {
        type: String
    },
    level: {
        type: Number
    },
    color: {
        type: String
    },
    color_text: {
        type: String
    },
    logo: {
        type: String
    }
}, {
        collection: 'teams'
    });

module.exports = mongoose.model('Team', Team);