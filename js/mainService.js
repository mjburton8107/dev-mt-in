angular.module('dmSocial').service('mainService', function($http){


// this.getProfiles = function(){
//   return $http({
//     method: 'GET',
//     url: 'http://connections.devmounta.in/api/profiles'
//   });
// }


// this.getFriends = function(){
//   return $http({
//     method: 'GET',
//     url: 'http://connections.devmounta.in/api/profiles',
//   })
// }

this.addFriend = function(name, bio, tagline, pic){
  this.friends.push({
    name: name,
    bio: bio,
    tagline: tagline,
    pic: pic
  })
}



  this.addUserInfo = function(userObj){
    if(userObj.name && userObj.tagline && userObj.profilePic && userObj.bio){
      this.friends.push(userObj);
    }
  }



    this.removeFriend = function(name){
      for (var i = 0; i < this.friends.length; i++){
        if(this.friends[i].name === name){
          this.friends.splice(i, 1);
        }
      }
    }

});
