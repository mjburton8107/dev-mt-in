angular.module('dmSocial').controller('initialViewController', function($scope, initialViewService) {

$scope.addUserInfo = function(name, tag, pic, bio){
  var newUser = {
        name: name,
        tagline: tag,
        profilePic: pic,
        bio : bio
      };
    return initialViewService.addUserInfo(newUser);
  };

$scope.addUserInfo();

})
