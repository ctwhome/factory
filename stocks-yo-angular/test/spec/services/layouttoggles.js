'use strict';

describe('Service: layoutToggles', function () {

  // load the service's module
  beforeEach(module('stocksApp'));

  // instantiate service
  var layoutToggles;
  beforeEach(inject(function (_layoutToggles_) {
    layoutToggles = _layoutToggles_;
  }));

  it('should do something', function () {
    expect(!!layoutToggles).toBe(true);
  });

});
