'use strict';

describe('Controller: SettingspanectrlCtrl', function () {

  // load the controller's module
  beforeEach(module('stocksApp'));

  var SettingspanectrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SettingspanectrlCtrl = $controller('SettingspanectrlCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
