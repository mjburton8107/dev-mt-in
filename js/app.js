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


    $urlRouterProvider
      .otherwise('/initialView')

})
