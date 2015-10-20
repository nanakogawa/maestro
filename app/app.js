 // Dependencies
 var express = require('express'),
  request = require('request'),
  path = require('path'),
  spotify = require('./spotify.js');

 // Express
 var app = express();

 app.use(express.static(__dirname));
 app.use(express.static(__dirname + '/../html'));
 app.use(express.static(__dirname + '/../css'));
 app.use(express.static(__dirname + '/../fonts'));
 app.use(express.static(__dirname + '/../images'));
 app.use(express.static(__dirname + '/../js'));
 app.use(express.static(__dirname + '/../json'));
 app.use('/spotify', spotify);

 app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/../index.html'));
 });

 // Start Server
 app.listen(1337);
 console.log('1337 is the magic port!');