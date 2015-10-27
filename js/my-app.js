 var app = angular.module('myApp', []);

 app.config(function($sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist([
   // Allow same origin resource loads.
   'self',
   // Allow loading from our assets domain.  Notice the difference between * and **.
   'https://p.scdn.co/mp3-preview/**'
  ]);
 });

 app.controller('FormValController', ['$scope', function($scope) {
  $scope.username = '';

  $scope.showName = function() {
    $scope.firstName = 'Hello, ' + $scope.username;
  };
 }]);

 app.controller('PlaylistController', ['$scope', '$http', function($scope, $http) {

  $scope.playlist = [];
  $scope.playing = [];

  $scope.getPlaylist = function() {
   console.log('searching...');
   var formData = formSubmit();

   $http({
    method: 'POST',
    url: 'spotify/data',
    data: formData
    }).then(function successCallback(response) {
     $scope.songs = response.data;
     console.log(response.data);
    }, function errorCallback(response) {
   });

   $scope.add = function($event) {
    var song = $($event.currentTarget).attr('data-id');
    $scope.songs.forEach(function(s) {
     if(s.id === song) {
      console.log('matched');
      $scope.playlist.push(s);
     }
    });
   };

   $scope.play = function($event) {
    var id = $($event.currentTarget).attr('data-id');
    $scope.songs.forEach(function(song) {
     if(song.id === id) {
      $scope.playing = song;
     }
    })
   };

   $scope.count = 0;
  };
 }]);

 function formSubmit() {
  var form = document.getElementById('search-form');
  var data = new Object();
  data.searchInput = document.getElementById('searchInput').value;
  return JSON.stringify(data);
 }

 function updateName() {
  var name = document.getElementById('username-update');
  name.style.display = 'block';
  name.style.fontWeight = 'bold';
 }

 function formReset() {
  $('.formInput').val('');
 }

 var submitButton = document.getElementById('submit');
 submitButton.addEventListener('click', updateName, false);
 submitButton.addEventListener('click', formReset, false);
