angular.module('Pics')
  .controller('groupsController', ['$scope', '$http', function($scope, $http) {

    $scope.groups = {};

    $http.get('/v1/groups')
    .success(function(groups) {
      $scope.groups = groups;
    })
    .error(function(error) {
      console.log(error);
    });

  }]);
