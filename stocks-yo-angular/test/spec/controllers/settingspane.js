'use strict';

describe('Controller: SettingspaneCtrl', function () {

  // load the controller's module
  beforeEach(module('stocksApp'));

  var SettingspaneCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SettingspaneCtrl = $controller('SettingspaneCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
