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

// Below was an attemp to use angular for opacity change; ended up using simple CSS

// $scope.onHoverChange = function(){
//     $scope.profileColor = {opacity: 0.25};
//     $scope.hoverText = "View Profile"
//   };
//
// $scope.offHoverChange = function(){
//     $scope.profileColor = {opacity: 1};
//     $scope.hoverText = ""
//   };

})
