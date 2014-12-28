'use strict';

/**
 * @ngdoc function
 * @name stocksApp.controller:NavbarCtrl
 * @description
 * # NavbarCtrl
 * Controller of the stocksApp
 */
    App.controller('NavbarCtrl', function ($scope, $rootScope) {
        $scope.sidebarToggle = function () {
            $rootScope.$broadcast('toggleSidebar', 'holaa');
        }
    });
