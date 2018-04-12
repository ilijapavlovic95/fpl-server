// coinRoutes.js

var express = require('express');
var app = express();
var myteamRoutes = express.Router();

// Require Item model in our routes module
var MyTeam = require('../models/MyTeam');

// Defined store route
myteamRoutes.route('/add').post(function (req, res) {
  var myteam = new MyTeam(req.body);
   myteam.save()
    .then(item => {
    res.status(200).json({'coin': 'Coin added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
myteamRoutes.route('/').get(function (req, res) {
   MyTeam.find(function (err, myteams){
    if(err){
      console.log(err);
    }
    else {
      res.json(myteams);
    }
  });
});

// Defined edit route
myteamRoutes.route('/edit/:id').get(function (req, res) {
  var id = req.params.id;
  MyTeam.findById(id, function (err, myteam){
      res.json(myteam);
  });
});

// Defined delete | remove | destroy route
myteamRoutes.route('/delete/:id').get(function (req, res) {
   MyTeam.findByIdAndRemove({_id: req.params.id}, function(err, myteam){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = myteamRoutes;