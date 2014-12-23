define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name stocksApp.controller:StocksCtrl
   * @description
   * # StocksCtrl
   * Controller of the stocksApp
   */
  angular.module('stocksApp.controllers.StocksCtrl', [])
    .controller('StocksCtrl', function ($scope) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];

      alert("hola");

    });
});
