// myteamRoutes.js

var express = require('express');
var app = express();
var myteamRoutes = express.Router();

// Require Item model in our routes module
var MyTeam = require('../models/MyTeam');

// Defined get data(index or listing) route
myteamRoutes.route('/').get(function (req, res) {
  MyTeam.find(function (err, myteams) {
    if (err) {
      console.log(err);
    } else {
      res.json(myteams);
    }
  });
});

myteamRoutes.route('/:code/').get(function (req, res) {
  const teamCode = req.params.code;
  MyTeam.find({ 'code': teamCode }, function (err, myteam) {
    if (err) {
      console.log(err);
    } else {
      res.json(myteam);
    }
  });
});

module.exports = myteamRoutes;