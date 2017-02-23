angular.module('dmSocial').controller('updateProfileController', function($scope) {

  $scope.updateUserInfo = function(name, tag, pic, bio){
    var newUser = {
          name: name,
          tagline: tag,
          profilePic: pic,
          bio : bio
        };
      localStorage.setItem('userObject', JSON.stringify(newUser));
    };

  $scope.addUserInfo();


});
