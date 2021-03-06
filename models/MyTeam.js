var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MyTeam = new Schema({
    _id: {
        type: Number
    },
    code: {
        type: String
    },
    name: {
        type: String
    },
    primary_color: {
        type: String
    },
    secondary_color: {
        type: String
    },
    players: [
        {
            player_id: {
                type: Number
            },
            first_team: {
                type: Boolean
            },
            captain: {
                type: Boolean
            }
        }
    ]
}, {
        collection: 'myteam'
    });

module.exports = mongoose.model("MyTeam", MyTeam);