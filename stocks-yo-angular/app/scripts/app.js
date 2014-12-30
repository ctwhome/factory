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
    //    'app.views',               // View templates into the js code.
    'ngRoute',                       // Help to route the application.
    'ngResource',                    // Allows you to work in a high level of the $http request service.

    'ui.utils',
    'ngTouch',
    'ngAnimate',
    'ngCookies',
    'ngSanitize'
]);

App.config(function ($routeProvider, $locationProvider) {
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
        .when('/recipes', {
          templateUrl: 'views/recipes.html',
          controller: 'RecipesCtrl'
        })
        .when('/recipes/:id', {
          templateUrl: 'views/recipes.html',
          controller: 'RecipesCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });

    /**
     * With location provider true, removes the /#/ in the url, but reload the whole page
     */
     //$locationProvider.html5Mode(true);

});
