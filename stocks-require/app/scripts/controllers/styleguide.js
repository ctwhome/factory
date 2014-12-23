define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name stocksApp.controller:StyleguideCtrl
   * @description
   * # StyleguideCtrl
   * Controller of the stocksApp
   */
  angular.module('stocksApp.controllers.StyleguideCtrl', [])
    .controller('StyleguideCtrl', function ($scope) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    });
});
