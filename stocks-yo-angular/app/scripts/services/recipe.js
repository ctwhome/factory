'use strict';

/**
 * Methods with $resource
 * Recipe.get()
 • Recipe.save()
 • Recipe.query()
 • Recipe.remove()
 • Recipe.delete()
 */
App.factory('Recipe', ['$resource', '$q', function ($resource) {
    return $resource('/recipes/:id', {id: '@id'});
}]);

// Load one recipie
App.factory('RecipeLoader', ['Recipe', '$route', '$q', function (Recipe, $route, $q) {
    return function () {
        var delay = $q.defer();
        Recipe.get({id: $route.current.params.recipeId}, function (recipe) {
            delay.resolve(recipe);
        }, function () {
            delay.reject('Unable to fetch recipe ' + $route.current.params.recipeId);
        });
        return delay.promise;
    };
}]);

// Load multiple recipies
App.factory('MultiRecipeLoader', ['Recipe', '$q', function (Recipe, $q) {
    return function () {
        var delay = $q.defer();
        Recipe.query(function (recipes) {
            delay.resolve(recipes);
        }, function () {
            delay.reject('Unable to fetch recipes');
        });
        return delay.promise;
    };
}]);
