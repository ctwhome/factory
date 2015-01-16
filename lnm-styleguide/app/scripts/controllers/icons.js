'use strict';

/**
 * @ngdoc function
 * @name stocksApp.controller:IconsCtrl
 * @description
 * # IconsCtrl
 * Controller of the stocksApp
 */
angular.module('stocksApp')
  .controller('IconsCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
