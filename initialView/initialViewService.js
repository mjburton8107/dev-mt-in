angular.module('dmSocial').service('initialViewService', function() {

  this.friends = [];

  this.addUserInfo = function(userObj){
    friends.push(userObj);
  }

  return this.friends;

  // this.addUserInfo = function(userObj){
  //   $http({
  //     method: 'POST',
  //     url: "http://connections.devmounta.in/api/profiles"
  //     data: JSON.stringify(userObj)
  //   })
  // }

})
