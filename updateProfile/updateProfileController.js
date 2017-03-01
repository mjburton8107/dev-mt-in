angular.module('dmSocial').controller('updateProfileController', function($scope) {

  var retrievedUser = localStorage.getItem('userObject');
  $scope.userName = JSON.parse(retrievedUser);


  $scope.updateUserInfo = function(name, tag, pic, bio){
    var newUser = {
          name: name,
          tagline: tag,
          profilePic: pic,
          bio : bio
        };
      if(!newUser){
        var retrievedUser = localStorage.getItem('userObject');
        $scope.userName = JSON.parse(retrievedUser);
      } else
        localStorage.setItem('userObject', JSON.stringify(newUser));
    };



});
