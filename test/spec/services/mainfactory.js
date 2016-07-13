'use strict';

describe('Service: mainFactory', function () {

  // load the service's module
  beforeEach(module('contactsApp'));

  // instantiate service
  var mainFactory;
  beforeEach(inject(function (_mainFactory_) {
    mainFactory = _mainFactory_;
  }));

  it('should do something', function () {
    expect(!!mainFactory).toBe(true);
  });

});
