define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name abcEnglishApp.controller:AboutCtrl
   * @description
   * # AboutCtrl
   * Controller of the abcEnglishApp
   */
  angular.module('abcEnglishApp.controllers.AboutCtrl', [])
    .controller('AboutCtrl', function ($scope) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    });
});
