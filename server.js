// server.js

const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    config = require('./config/DB')
    playerRoutes = require('./expressRoutes/playerRoutes')
    teamRoutes = require('./expressRoutes/teamRoutes')
    myteamRoutes = require('./expressRoutes/myteamRoutes')
    fixtureRoutes = require('./expressRoutes/fixtureRoutes');

mongoose.Promise = global.Promise;
mongoose.connect(config.DB).then(
    () => { console.log('Database is connected') },
    err => { console.log('Can not connect to the database' + err) }
);

const app = express();
app.use(bodyParser.json());
app.use(cors());
const port = process.env.PORT || 4000;

app.use('/players', playerRoutes);
app.use('/teams', teamRoutes);
app.use('/myteam', myteamRoutes);
app.use('/fixtures', fixtureRoutes);

const server = app.listen(port, function () {
    console.log('Listening on port ' + port);
});