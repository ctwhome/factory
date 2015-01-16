'use strict';

/**
 * @ngdoc function
 * @name stocksApp.controller:SidebarCtrl
 * @description
 * # SidebarCtrl
 * Controller of the stocksApp
 */
angular.module('stocksApp')
    .controller('SidebarCtrl', function ($scope, $layout) {

        $scope.$on('toggleSidebar', function(event, args) {

           $layout.layoutSettings.sidebar.isOpen = !$layout.layoutSettings.sidebar.isOpen;
           $layout.layoutSettings.sidebar.isOpen ? $scope.collapsed = "collapsed" : $scope.collapsed = "";

            console.log('collapse ',$scope.collapsed);
            console.log('$layout.layoutSettings.sidebar.isOpen: ', $layout.layoutSettings.sidebar.isOpen);
            console.log(args);
        });

        $scope.settingsPaneToggle = function ($rootScope) {
            $rootScope.$broadcast('toggleSettingsPane');
        }

        /**
         * Mobile Menu
         */
        $scope.mobileMenuToggle = function ($rootScope) {
            $rootScope.$broadcast('mobileMenuToggle');
        }
    });
