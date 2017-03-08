angular.module('dmSocial').controller('landingPageController', function($scope) {

  var retrievedUser = localStorage.getItem('userObject');

  $scope.userName = JSON.parse(retrievedUser);

  console.log('this is whats in local storage', $scope.retrievedUser);




})
