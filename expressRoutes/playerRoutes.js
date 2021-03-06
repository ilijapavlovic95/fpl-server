// playerRoutes.js

var express = require('express');
var app = express();
var playerRoutes = express.Router();

// Require Item model in our routes module
var Player = require('../models/Player');

// Defined get data(index or listing) route
playerRoutes.route('/').get(function (req, res) {
  //  Player.find(function (err, players){
  //   if(err){
  //     console.log(err);
  //   }
  //   else {
  //     res.json(players);
  //   }
  // });
  Player.aggregate([{
    $lookup: {
      from: "teams", // collection name in db
      localField: "club",
      foreignField: "_id",
      as: "team"
    }
  }]).exec(function (err, players) {
    // students contain WorksnapsTimeEntries
    if (err) {
      console.log(err);
    }
    else {
      res.json(players);
    }
  });
});

module.exports = playerRoutes;