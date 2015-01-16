'use strict';

describe('Directive: ngToggle', function () {

  // load the directive's module
  beforeEach(module('stocksApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<ng-toggle></ng-toggle>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the ngToggle directive');
  }));
});
