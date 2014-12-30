'use strict';

/**
 * @ngdoc function
 * @name stocksApp.controller:RecipesCtrl
 * @description
 * # RecipesCtrl
 * Controller of the stocksApp
 */
App.controller('RecipesCtrl', ['$scope', '$location', 'Recipe', function ($scope, $location, recipe) {
    $scope.recipe = recipe;
    $scope.edit = function () {
        $location.path('/edit/' + recipe.id);
    };
}]);
