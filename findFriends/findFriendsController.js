angular.module('dmSocial').controller('findFriendsController', function($scope, $http, $q) {

  var retrievedUser = localStorage.getItem('userObject');
  $scope.userName = JSON.parse(retrievedUser);

  $http({
    method: 'GET',
    url: 'http://connections.devmounta.in/api/profiles',
  }).then(function(response) {

      // console.log('this is response', response);
      $scope.profiles = response.data;
      console.log('this is $scope.profiles', $scope.profiles)

    });

    $scope.findFriends = function(profileName){
      $http({
        method: 'GET',
        url: 'http://connections.devmounta.in/api/profiles?name=' + profileName,
      }).then(function(response) {
        $scope.profiles = response.data;
      })
    }

})
