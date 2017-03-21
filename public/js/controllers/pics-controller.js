angular.module('Pics')
  .controller('picsController', ['$scope', 'resourcePic', function($scope, resourcePic) {

    $scope.pics = [];
    $scope.filter = '';
    $scope.message = '';

    resourcePic.query(function(pics) {
      $scope.pics = pics;
    }, function(error) {
      console.log(error);
    });

    $scope.delete = function(pic) {
      resourcePic.delete({picId : pic._id}, function() {
        $scope.$emit('picDeleted', pic);
        var indexpic = $scope.pics.indexOf(pic);
        $scope.pics.splice(indexpic, 1);
        $scope.message = 'The pic '+ pic.title +' has been successfully removed! =)';
      }, function(error) {
        console.log(error);
        $scope.message = 'The pic '+ pic.title +' can not be removed! =(';
      });
    };
  }]);
