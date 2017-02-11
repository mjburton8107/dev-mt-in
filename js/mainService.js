angular.module('dmSocial').service('mainService', function(){

  this.friends = [
    // { name: 'Mike Burton',
    //   tagline: 'SOME AWESOME TAGLINE ABOUT YOU',
    //   profilePic: 'https://media.licdn.com/mpr/mpr/shrinknp_100_100/AAEAAQAAAAAAAAMiAAAAJGZlZWFhMGMxLWY5YjUtNDYyYS05ZDdlLTQ5MGI4ZDNhOWE2OA.jpg',
    //   bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    // }
  ];

  this.addUserInfo = function(userObj){
    if(userObj.name && userObj.tagline && userObj.profilePic && userObj.bio){
      this.friends.push(userObj);
    }
  }

  this.updateUserInfo = function(userObj){
    for (var i = 0; i < this.friends.length; i++){
        if(this.friends[i].name !== userObj.name){
          this.friends[i].name = userObj.name;
        } if(this.friends[i].tagline !== userObj.tagline){
          this.friends[i].tagline = userObj.tagline;
        } if(this.friends[i].profilePic !== userObj.profilePic){
          this.friends[i].profilePic = userObj.profilePic;
        } if(this.friends[i].bio !== userObj.bio){
          this.friends[i].bio = userObj.bio;
        }
      }
    };

});
