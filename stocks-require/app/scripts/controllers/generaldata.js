define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name stocksApp.controller:GeneraldataCtrl
   * @description
   * # GeneraldataCtrl
   * Controller of the stocksApp
   */
  angular.module('stocksApp.controllers.GeneraldataCtrl', [])
    .controller('GeneraldataCtrl', function ($scope) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];

      $scope.companies = 550;
      $scope.maximos = 27;
    });
});
