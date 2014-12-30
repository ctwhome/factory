'use strict';

/**
 * @ngdoc directive
 * @name stocksApp.directive:butterbar
 * @description
 * # butterbar
 */
App.directive('loading', ['$rootScope', function ($rootScope) {
    return {
        link: function (scope, element, attrs) {
            element.addClass('hide');
            $rootScope.$on('$routeChangeStart', function () {
                element.removeClass('hide');
            });
            $rootScope.$on('$routeChangeSuccess', function () {
                element.addClass('hide');
            });
        },
        template : "Loading"
    };
}]);    §

App.directive('focus', function () {
    return {
        link: function (scope, element, attrs) {
            element[0].focus();
        }
    };
});
