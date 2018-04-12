// playerRoutes.js

var express = require('express');
var app = express();
var teamRoutes = express.Router();

// Require Item model in our routes module
var Team = require('../models/Team');

// Defined get data(index or listing) route
teamRoutes.route('/').get(function (req, res) {
   Team.find(function (err, teams){
    if(err){
      console.log(err);
    }
    else {
      res.json(teams);
    }
  });
});

module.exports = teamRoutes;