angular.module('Pics')
  .controller('picController', ['$scope', '$routeParams', 'resourcePic', 'registerPic', function($scope, $routeParams, resourcePic, registerPic) {
    $scope.pic = {};
    $scope.message = '';

    if ($routeParams.picId) {
      resourcePic.get({picId : $routeParams.picId}, function(pic) {
        $scope.pic = pic;
      }, function(error) {
        console.log(error);
        $scope.message = 'Could not find a pic. =|';
      });
    }

    $scope.save = function() {
      if ($scope.form.$valid) {
        registerPic.register($scope.pic)
          .then(function(data) {
            $scope.message = data.message;
            if (!data.update) {
              $scope.pic = {};
              $scope.form.$setPristine();
            }
          })
          .catch(function(error) {
            $scope.message = erro.message;
          });
      }
    };

  }]);
