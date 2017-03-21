angular.module('picsDirectives', [])
  .directive('picsPanel', function() {

    var ddo = {};

    ddo.restrict = "AE";
    ddo.transclude = true;

    ddo.scope = {
      title: '@'
    };

    ddo.templateUrl = 'js/directives/panel.html';

    return ddo;

  })
  .directive('newPic', function() {

       var ddo = {};

       ddo.restrict = "AE";

       ddo.scope = {
           title: '@',
           url: '@'
       };

       ddo.template = '<img class="img-responsive center-block" src="{{url}}" alt="{{title}}">';

       return ddo;
   })
   .directive('dangerButton', function() {

     var ddo = {};

     ddo.restrict = 'E';

     ddo.scope = {
       name: '@',
       action: '&'
     };

     ddo.template = '<button class="btn btn-danger outline center-block btn-panel" ng-click="action()">{{name}}</button>';

     return ddo;
   })
   .directive('focus', function() {

     var ddo = {};

     ddo.restrict = 'A';

     ddo.link = function(scope, element) {
       scope.$on('picRegistered', function() {
         element[0].focus();
       });
     };
     return ddo;
   })
   /*.directive('picsTitles', function() {

     var ddo = {};

     ddo.restrict = 'E';

     ddo.template = '<ul><li ng-repeat="title in titles">{{title}}</li></ul>';

     ddo.controller = ['$scope', 'resourcePic', function($scope, $rootScope, resourcePic) {
       resourcePic.query(function(pics) {
         $scope.titles = pics.map(function(pic) {
           return pic.title;
         });
       });

       $rootScope.$on('picDeleted', function(pic) {
         var indexpic = $scope.titles.indexOf(pic);
         $scope.titles.splice(indexpic, 1);
       });
     }];

     return ddo;
   })*/;
