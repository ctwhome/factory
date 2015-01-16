'use strict';

describe('Controller: VersionlogCtrl', function () {

  // load the controller's module
  beforeEach(module('stocksApp'));

  var VersionlogCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    VersionlogCtrl = $controller('VersionlogCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
