'use strict';

describe('Controller: FormtestCtrl', function () {

  // load the controller's module
  beforeEach(module('contactsApp'));

  var FormtestCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FormtestCtrl = $controller('FormtestCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(FormtestCtrl.awesomeThings.length).toBe(3);
  });
});
