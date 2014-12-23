define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name stocksApp.controller:MyrouteCtrl
   * @description
   * # MyrouteCtrl
   * Controller of the stocksApp
   */
  angular.module('stocksApp.controllers.MyrouteCtrl', [])
    .controller('MyrouteCtrl', function ($scope) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    });
});
