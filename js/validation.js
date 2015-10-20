 var app = angular.module('myApp', []);

 app.controller('FormValController', ['$scope', function($scope) {

  $scope.master = {};

  $scope.update = function(user) {
   $scope.master = angular.copy(user);
  };

  $scope.reset = function() {
   $scope.user = angular.copy($scope.master);
  };

  $scope.reset();
 }]);

