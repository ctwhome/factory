define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name stocksApp.controller:MainCtrl
   * @description
   * # MainCtrl
   * Controller of the stocksApp
   */
  angular.module('stocksApp.controllers.MainCtrl', [])
    .controller('MainCtrl', function ($scope) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];


    });
});
