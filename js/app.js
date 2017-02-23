angular.module('dmSocial', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('initialView', {
      url: '/initialView',
      templateUrl: 'initialView/initialView.html',
      controller: 'initialViewController'
    })
    .state('landingPage', {
      url: '/landingpage',
      templateUrl: 'landingPage/landingPage.html',
      controller: 'landingPageController'
    })
    .state('friendsView', {
      url: '/friendsview',
      templateUrl: 'friendsView/friendsView.html',
      controller: 'friendsViewController'
    })
    .state('friendProfile', {
      url: '/friendprofile/:profileId',
      templateUrl: 'friendProfile/friendProfile.html',
      controller: 'friendProfileController'
    })
    .state('updateProfile', {
      url: '/updateprofile',
      templateUrl: 'updateProfile/updateProfile.html',
      controller: 'updateProfileController'
    })
    .state('findFriends', {
      url: '/findfriends',
      templateUrl: 'findFriends/findFriends.html',
      controller: 'findFriendsController'
    })

    $urlRouterProvider
      .otherwise('/initialView')

})
