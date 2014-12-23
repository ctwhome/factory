/*jshint unused: vars */
define(['angular', 'controllers/main', 'controllers/about', 'controllers/myroute', 'controllers/stocks', 'controllers/styleguide', 'controllers/graph', 'controllers/personaldata', 'controllers/generaldata']/*deps*/, function (angular, MainCtrl, AboutCtrl, MyrouteCtrl, StocksCtrl, StyleguideCtrl, GraphCtrl, PersonaldataCtrl, GeneraldataCtrl)/*invoke*/ {
  'use strict';

  /**
   * @ngdoc overview
   * @name stocksApp
   * @description
   * # stocksApp
   *
   * Main module of the application.
   */
  return angular
    .module('stocksApp', ['stocksApp.controllers.MainCtrl',
'stocksApp.controllers.AboutCtrl',
'stocksApp.controllers.MyrouteCtrl',
'stocksApp.controllers.StocksCtrl',
'stocksApp.controllers.StyleguideCtrl',
'stocksApp.controllers.GraphCtrl',
'stocksApp.controllers.PersonaldataCtrl',
'stocksApp.controllers.GeneraldataCtrl',
/*angJSDeps*/
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ngAnimate',
    'ngTouch'
  ])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/main.html',
          controller: 'MainCtrl'
        })
        .when('/about', {
          templateUrl: 'views/about.html',
          controller: 'AboutCtrl'
        })
        .when('/myroute', {
          templateUrl: 'views/myroute.html',
          controller: 'MyrouteCtrl'
        })
        .when('/stocks', {
          templateUrl: 'views/stocks.html',
          controller: 'StocksCtrl'
        })
        .when('/styleguide', {
          templateUrl: 'views/styleguide.html',
          controller: 'StyleguideCtrl'
        })
        .otherwise({
          redirectTo: '/'
        });
    });
});
