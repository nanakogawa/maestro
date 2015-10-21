 var app = angular.module('myApp', []);

 app.controller('FormValController', ['$scope', function($scope) {

  $scope.master = {};

  $scope.update = function(user) {
   $scope.master = angular.copy('Hello, ' + user.firstName);
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

 var updateUsername = document.getElementById('updateUsername');
 updateUsername.addEventListener('click', updateName, false);