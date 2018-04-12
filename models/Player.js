var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var Player = new Schema({
    _id: {
        type: Number
    },
    name: {
        type: String
    },
    price: {
        type: Number
    },
    selected_by: {
        type: Number
    },
    bps: {
        type: Number
    },
    influence: {
        type: Number
    },
    creativity: {
        type: Number
    },
    threat: {
        type: Number
    },
    position: {
        type: Number
    },
    club: {
        type: Number
    }
}, {
        collection: 'players'
    });

module.exports = mongoose.model('MyTeam', Player);