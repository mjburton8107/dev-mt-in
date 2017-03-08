angular.module('dmSocial').controller('friendProfileController', function($scope, $stateParams, mainService){

  var id = $stateParams.profileId

  $scope.friendName = mainService.friends[id].name
  $scope.friendTagline = mainService.friends[id].tagline
  $scope.friendBio = mainService.friends[id].bio
  $scope.friendPic = mainService.friends[id].profilePic


});
