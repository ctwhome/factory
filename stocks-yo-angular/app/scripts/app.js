'use strict';

/**
 * @ngdoc overview
 * @name stocksApp
 * @description
 * # stocksApp
 *
 * Main module of the application.
 */
angular
    .module('stocksApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
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
            .when('/help', {
                templateUrl: 'views/help.html',
                controller: 'HelpCtrl'
            })
            .when('/login', {
                templateUrl: 'views/login.html',
                controller: 'LoginCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });

    })
    .run(function ($layoutToggles) {
       //  $layoutToggles.initToggles();
    });
