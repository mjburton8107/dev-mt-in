angular.module('dmSocial').service('mainService', function(){

  this.friends = [
    { name: 'Mike Burton',
      tagline: 'I am become death',
      profilePic: 'https://media.licdn.com/mpr/mpr/shrinknp_100_100/AAEAAQAAAAAAAAMiAAAAJGZlZWFhMGMxLWY5YjUtNDYyYS05ZDdlLTQ5MGI4ZDNhOWE2OA.jpg',
      bio: 'business dev and such'
    }
  ];

  this.addUserInfo = function(userObj){
    if(userObj.name && userObj.tagline && userObj.profilePic && userObj.bio){
      this.friends.push(userObj);
    }
  }

});
