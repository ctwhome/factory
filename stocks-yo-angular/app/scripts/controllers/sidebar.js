'use strict';

/**
 * @ngdoc function
 * @name stocksApp.controller:SidebarCtrl
 * @description
 * # SidebarCtrl
 * Controller of the stocksApp
 */
angular.module('stocksApp')
    .controller('SidebarCtrl', function ($scope, $rootScope, $layout) {
        $scope.$on('toggleSidebar', function(event, args) {
            $layout.layoutSettings.sidebar.isOpen = !$layout.layoutSettings.sidebar.isOpen;
            var toggle = $layout.layoutSettings.sidebar.isOpen;
            toggle ? $scope.collapsed = "collapsed" : $scope.collapsed = "";
        });

        $scope.settingsPaneToggle = function () {
            $rootScope.$broadcast('toggleSettingsPane');
        }

        /**
         * Mobile Menu
         */
        $scope.mobileMenuToggle = function () {
            $rootScope.$broadcast('mobileMenuToggle');
        }

    });
