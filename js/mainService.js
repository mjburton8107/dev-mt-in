angular.module('dmSocial').service('mainService', function($http){

  this.friends = [
    { name: 'Heidi Hawkins',
      tagline: 'no pain, no gain',
      profilePic: 'https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg',
      bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    { name: 'Dustin Hawkins',
      tagline: 'Do work',
      profilePic: 'https://s3.amazonaws.com/uifaces/faces/twitter/chadengle/128.jpg',
      bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    { name: 'Mike Burton',
      tagline: 'I am become death',
      profilePic: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    { name: 'Ron Swanson',
      tagline: 'Income tax is illegal',
      profilePic: 'https://s3.amazonaws.com/uifaces/faces/twitter/mghoz/128.jpg',
      bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    { name: 'Leslie Knope',
      tagline: 'Fearless and dedicated public servant',
      profilePic: 'https://s3.amazonaws.com/uifaces/faces/twitter/nzcode/128.jpg',
      bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    { name: 'Chris Pratt',
      tagline: 'Up in horsey heaven he is a thing...',
      profilePic: 'https://s3.amazonaws.com/uifaces/faces/twitter/arashmil/128.jpg',
      bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
  ];

this.getProfiles = function(){
  return $http({
    method: 'GET',
    url: 'http://connections.devmounta.in/api/profiles'
  });
}


  this.getFriends = function(){
    return this.friends;
  }

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
