'use strict';

describe('Controller: ExtraSearchCtrl', function () {

  // load the controller's module
  beforeEach(module('stocksApp'));

  var ExtraSearchCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ExtraSearchCtrl = $controller('ExtraSearchCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
