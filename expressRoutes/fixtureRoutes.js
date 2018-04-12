// fixtureRoutes.js

var express = require('express');
var app = express();
var fixtureRoutes = express.Router();

// Require Item model in our routes module
var Fixture = require('../models/Fixture');

// Defined get data(index or listing) route
fixtureRoutes.route('/').get(function (req, res) {
   Fixture.find(function (err, fixtures){
    if(err){
      console.log(err);
    }
    else {
      res.json(fixtures);
    }
  });
});

module.exports = fixtureRoutes;