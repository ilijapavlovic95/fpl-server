var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var Fixture = new Schema({
    name: { type: String },
    matches: [
        {
            date: { type: Date },
            team1: {
                key: { type: String },
                name: { type: String },
                code: { type: String }
            },
            team2: {
                key: { type: String },
                name: { type: String },
                code: { type: String }
            },
            score1: { type: Number },
            score2: { type: Number }
        }
    ]
}, {
        collection: 'fixtures'
    });

module.exports = mongoose.model('Fixture', Fixture);