'use strict';

/**
 * @ngdoc function
 * @name stocksApp.controller:NavbarCtrl
 * @description
 * # NavbarCtrl
 * Controller of the stocksApp
 */
angular.module('stocksApp')
  .controller('NavbarCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    this.toogleSettings = function(){
      alert("click in the menu button");
    }
  });
