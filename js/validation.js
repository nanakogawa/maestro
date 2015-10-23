 var app = angular.module('myApp', []);

 app.controller('FormValController', ['$scope', function($scope) {
  $scope.username = '';

  $scope.showName = function() {
    $scope.firstName = 'Hello, ' + $scope.username;
  };
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
