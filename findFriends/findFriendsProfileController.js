angular.module('dmSocial').controller('findFriendsProfileController', function($scope, $http, $stateParams, mainService){

 var id = $stateParams.profileId

  console.log('this is id', id)

  $http({
    method: 'GET',
    url: 'http://connections.devmounta.in/api/profiles/' + id,
  }).then(function(response) {



      $scope.person = response.data;

  $scope.addFriend = function(name, id, bio, tag, pic){
    var newFriend = {
      name : name,
      id: id,
      bio: bio,
      tagline: tag,
      pic: pic
    }
    console.log('this is newfriend object', newFriend);
    mainService.addFriend(newFriend);
  }


      // $scope.profiles = response['data'];



      // console.log('this is response.data', $scope.profiles)

      // $scope.friendName = response.data[id].name
      // $scope.friendTagline = mainService.friends[id].tagline
      // $scope.friendBio = mainService.friends[id].bio
      // $scope.friendPic = mainService.friends[id].profileUrl

    });




});
