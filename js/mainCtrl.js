angular.module('dmSocial').controller('mainCtrl', function($scope){

  var pages = ['view', 'find', 'update']
  $scope.view = true;

  $scope.toggleView = function(page){
    console.log(page)
    for (var i = 0; i < pages.length; i++){
      if (pages[i] === page) {
        $scope[pages[i]] = true;
      } else {
        $scope[pages[i]] = false;
      }
    }
  }

})
