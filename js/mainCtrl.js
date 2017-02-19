angular.module('dmSocial').controller('mainCtrl', function($scope, mainService){

  // $scope.friends = mainService.friends;

  // var pages = ['initialView', 'landingPage', 'view', 'find', 'update', 'friendsProfile']
  // $scope.initialView = true;
  //
  // $scope.toggleView = function(page){
  //   for (var i = 0; i < pages.length; i++){
  //     if (pages[i] === page) {
  //       $scope[pages[i]] = true;
  //     } else {
  //       $scope[pages[i]] = false;
  //     }
  //   }
  // }


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

  // $scope.getProfiles = function(){
  //   mainService.getProfiles().then(function(response){
  //     $scope.profiles = response.data;
  //   })
  //
  // }
  //
  // $scope.getProfiles();
  //

// $scope.addFriend = function(name, bio, tagline, pic){
//   mainService.addFriend(name, tagline, bio, pic)
// };
//
// $scope.addFriend();


})
