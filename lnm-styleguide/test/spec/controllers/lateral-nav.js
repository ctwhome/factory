'use strict';

describe('Controller: LateralNavCtrl', function () {

  // load the controller's module
  beforeEach(module('stocksApp'));

  var LateralNavCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LateralNavCtrl = $controller('LateralNavCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
