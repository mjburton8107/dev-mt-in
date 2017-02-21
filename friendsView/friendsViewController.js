angular.module('dmSocial').controller('friendsViewController', function($scope, $state, mainService){


$scope.friends = mainService.friends;

var retrievedUser = localStorage.getItem('userObject');

$scope.userName = JSON.parse(retrievedUser);

$scope.removeFriend = function(name){
  mainService.removeFriend(name);
}

$scope.friendClicked = function(id){
  $state.go('friendProfile', {profileId: id})
}

})
