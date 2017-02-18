angular.module('dmSocial').service('initialViewService', function($http) {

  this.addUserInfo = function(userObj){
    $http({
      method: 'POST',
      url: "http://connections.devmounta.in/api/profiles"
      data: JSON.stringify(userObj)
    })
  }

})
