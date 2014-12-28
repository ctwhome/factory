'use strict';

/**
 * @ngdoc overview
 * @name stocksApp
 * @description
 * # stocksApp
 *
 * Main module of the application.
 */
var App = angular.module('stocksApp', [
    //    'app.views',               // View templates into the js code
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch'
    ]);

    App.config(function ($routeProvider) {
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
    });
