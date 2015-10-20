 // Dependencies
 var express = require('express'),
  SpotifyWebApi = require('spotify-web-api-node');

 var spotify = express.Router();

 spotify.get('/data', function(req, res){

 var spotifyApi = new SpotifyWebApi({
  clientId : '227a3ce85d514820a7727d61b8d17686',
  clientSecret : '445fa2a6c024708812902098e535471',
  redirectUri : 'http://localhost:1337/spotify/result'
 });

 spotifyApi.searchTracks('Love', {limit : 20, offset : 20})
  .then(function(data) {
   console.log('Search by "Love"', data.body);
   res.send(data);
  },
  function(err) {
   console.error(err);
  });

 });

 // Return router
 module.exports = spotify;

