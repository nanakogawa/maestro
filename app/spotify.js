 // Dependencies
 var express = require('express'),
  SpotifyWebApi = require('spotify-web-api-node'),
  bodyParser = require('body-parser');

 // Body Parser
 var jsonParser = bodyParser.json();

 //Express
 var spotify = express.Router();

 // API
 spotify.post('/data', jsonParser, function(req, res){

  var spotifyApi = new SpotifyWebApi({
   clientId : '227a3ce85d514820a7727d61b8d17686',
   clientSecret : '445fa2a6c024708812902098e535471',
   redirectUri : 'http://localhost:1337/spotify/data'
  });

  var search = req.body.searchInput;

  spotifyApi.searchTracks(search, {limit : 50, offset : 20})
  .then(function(data) {
   res.send(data.body.tracks.items);
  },
  function(err) {
   console.error(err);
  });
 });

 // Return router
 module.exports = spotify;

