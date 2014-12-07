define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name abcEnglishApp.controller:MainCtrl
   * @description
   * # MainCtrl
   * Controller of the abcEnglishApp
   */
  angular.module('abcEnglishApp.controllers.MainCtrl', [])
    .controller('MainCtrl', function ($scope) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    });
});
