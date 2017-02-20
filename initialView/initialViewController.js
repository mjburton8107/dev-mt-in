angular.module('dmSocial').controller('initialViewController', function($scope) {

// $scope.user = [];

$scope.addUserInfo = function(name, tag, pic, bio){
  var newUser = {
        name: name,
        tagline: tag,
        profilePic: pic,
        bio : bio
      };
    localStorage.setItem('userObject', JSON.stringify(newUser));
  };

$scope.addUserInfo();

})

// when you need to get the user object: var retrievedObject = localStorage.getItem('testObject');
