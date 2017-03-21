angular.module('Pics', ['picsDirectives', 'ngAnimate', 'ngRoute', 'picsServices'])
  .config(function($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $routeProvider.when('/pics', {
      templateUrl: 'partials/principal.html',
      controller: 'picsController'
    });

    $routeProvider.when('/pics/add', {
      templateUrl: 'partials/pic.html',
      controller: 'picController'
    });

    $routeProvider.when('/pics/edit/:picId', {
      templateUrl: 'partials/pic.html',
      controller: 'picController'
    });

    $routeProvider.otherwise({redirectTo: '/pics'});

  });
