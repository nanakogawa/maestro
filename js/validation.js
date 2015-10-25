 var app = angular.module('myApp', []);

 app.controller('FormValController', ['$scope', function($scope) {
  $scope.username = '';

  $scope.showName = function() {
    $scope.firstName = 'Hello, ' + $scope.username;
  };
 }]);

 app.controller('PlaylistController', ['$scope', '$http', function($scope, $http) {

  $scope.getPlaylist = function() {
   console.log('searching...');
   var formData = formSubmit();

   $http({
    method: 'POST',
    url: 'spotify/data',
    data: formData
    }).then(function successCallback(response) {
     console.log(response);
    }, function errorCallback(response) {
   });
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
