'use strict';

describe('Directive: sidebarToggle', function () {

  // load the directive's module
  beforeEach(module('stocksApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<sidebar-toggle></sidebar-toggle>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the sidebarToggle directive');
  }));
});
