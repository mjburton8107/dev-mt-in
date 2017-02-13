angular.module('dmSocial').controller('mainCtrl', function($scope, mainService){

  $scope.friends = mainService.friends;

  var pages = ['initialView', 'landingPage', 'view', 'find', 'update']
  $scope.initialView = true;

  $scope.toggleView = function(page){
    console.log(page)
    for (var i = 0; i < pages.length; i++){
      if (pages[i] === page) {
        $scope[pages[i]] = true;
      } else {
        $scope[pages[i]] = false;
      }
    }
  }

  $scope.addUserInfo = function(name, tag, pic, bio){
      var newUser = {
        name: name,
        tagline: tag,
        profilePic: pic,
        bio : bio
      };
      mainService.addUserInfo(newUser);
  }

  $scope.updateUserInfo = function(name, tag, pic, bio){
    var updatedUser = {
      name: name,
      tagline: tag,
      profilePic: pic,
      bio: bio
    };
    mainService.updateUserInfo(updatedUser);
  };

  $scope.removeFriend = function(name){
    mainService.removeFriend(name);
  }

})
