'use strict';

describe('Controller: AccessibilityCtrl', function () {

  // load the controller's module
  beforeEach(module('stocksApp'));

  var AccessibilityCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AccessibilityCtrl = $controller('AccessibilityCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
