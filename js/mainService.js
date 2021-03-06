angular.module('dmSocial').service('mainService', function($http){

this.friends = [
    { name: 'Heidi Hawkins',
      id: 000,
      tagline: 'no pain, no gain',
      profilePic: 'https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg',
      bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    { name: 'Dustin Hawkins',
      id: 001,
      tagline: 'Do work',
      profilePic: 'https://s3.amazonaws.com/uifaces/faces/twitter/chadengle/128.jpg',
      bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    { name: 'DJ Shooter',
      id: 002,
      tagline: 'I am become death',
      profilePic: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    { name: 'Ron Swanson',
      id: 003,
      tagline: 'Income tax is illegal',
      profilePic: 'https://s3.amazonaws.com/uifaces/faces/twitter/mghoz/128.jpg',
      bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    { name: 'Leslie Knope',
      id: 004,
      tagline: 'Fearless and dedicated public servant',
      profilePic: 'https://s3.amazonaws.com/uifaces/faces/twitter/nzcode/128.jpg',
      bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    { name: 'Chris Pratt',
      id: 005,
      tagline: 'Up in horsey heaven he is a thing...',
      profilePic: 'https://s3.amazonaws.com/uifaces/faces/twitter/arashmil/128.jpg',
      bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
  ];

  this.removeFriend = function(name){
    for (var i = 0; i < this.friends.length; i++){
      if(this.friends[i].name === name){
        this.friends.splice(i, 1);
      }
    }
  }

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

this.addFriend = function(friendObj){
  this.friends.push(friendObj)
}

});
