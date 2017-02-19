angular.module('dmSocial').controller('initialViewController', function($scope) {

$scope.user = [];

$scope.addUserInfo = function(name, tag, pic, bio){
  var newUser = {
        name: name,
        tagline: tag,
        profilePic: pic,
        bio : bio
      };
    $scope.user.push(newUser);
    localStorage.setItem('userObject', JSON.stringify($scope.user));
  };

$scope.addUserInfo();

})

// when you need to get the user object: var retrievedObject = localStorage.getItem('testObject');
