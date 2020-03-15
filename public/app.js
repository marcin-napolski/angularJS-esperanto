'use strict';
  // declare a module
  var esperantoApp = angular.module('esperantoPlatform', ['ngRoute', 'ngMessages', 'ngCookies', 'ngAnimate']);

  // configure the module - create controllers, services, filters, directives, etc.
  esperantoApp.config(function($routeProvider, $locationProvider) {
    $routeProvider
      .otherwise({
        redirectTo: '/'
      });
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
  });

  esperantoApp.controller('startCtrl', function ($scope) {
    $scope.fName = 'Hello';
    $scope.lName = 'World';
  });
  esperantoApp.controller('historiaCtrl', function ($scope) {
    $scope.fName = 'Hello';
    $scope.lName = 'World';
  });

  esperantoApp.controller('partsCtrl', function ($scope, $http) {
    $http.get('http://esperanto.joker.usermd.net/parts').success(function(data) {
      $scope.parts = data;
    });
  });

//  esperantoApp.controller('rockCtrl', function ($scope, $http) {
//    $http.get('http://esperanto.joker.usermd.net/hits').success(function(data) {
//      $scope.hits = data;
//    });
//  });


