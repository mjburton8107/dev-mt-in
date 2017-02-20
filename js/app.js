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

    $urlRouterProvider
      .otherwise('/initialView')

})
