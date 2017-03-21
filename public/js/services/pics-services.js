angular.module('picsServices', ['ngResource'])
  .factory('resourcePic', ['$resource', function($resource) {

    return $resource('/v1/pics/:picId', null, {
      'update' : {
        method : 'PUT'
      }
    });
  }])
  .factory('registerPic', ['resourcePic', '$q', '$rootScope', function(resourcePic, $q, $rootScope) {
    var service = {};

    service.register = function(pic) {
      return $q(function(resolve, reject) {
        if (pic._id) {
          resourcePic.update({picId : pic._id}, pic, function() {
            $rootScope.$broadcast('picRegistered');
            resolve({
              message : 'Your pic has been successfully changed! =)',
              update : true
            });
          }, function(error) {
            console.log(error);
            reject({
              message : 'Your pic could not be changed. =|'
            });
          });
        } else {
          resourcePic.save(pic, function() {
            $rootScope.$broadcast('picRegistered');
            resolve({
              message : 'Your pic is successfully registered! =)',
              update : false
            });
          }, function(error) {
            console.log(error);
            reject({
              message : 'Could not register your pic! =('
            });
          });
        }
      });
    };

    return service;
  }]);
