'use strict';

/**
 * @ngdoc function
 * @name stocksApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the stocksApp
 */
angular.module('stocksApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
