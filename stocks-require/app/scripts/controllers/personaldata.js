define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name stocksApp.controller:PersonaldataCtrl
   * @description
   * # PersonaldataCtrl
   * Controller of the stocksApp
   */
  angular.module('stocksApp.controllers.PersonaldataCtrl', [])
    .controller('PersonaldataCtrl', function ($scope) {
      $scope.awesomeThings = ['HTML5 Boilerplate','AngularJS','Karma'];

      $scope.capital = capital();
      $scope.risk = 30;
      $scope.profitability = 30;


     function capital(){
        return 100;
      }
    });
});
