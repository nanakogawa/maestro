var app = angular.module('myApp', []);

 app.controller('FormValController', ['$scope', function($scope) {

  $scope.master = {};

  $scope.update = function(user) {
   $scope.master = angular.copy('Hello, ' +  user.firstName);
  };

  $scope.reset = function() {
   $scope.user = angular.copy($scope.master);
  };

  $scope.reset();
 }]);

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
