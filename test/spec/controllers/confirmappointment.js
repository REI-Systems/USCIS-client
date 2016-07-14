'use strict';

describe('Controller: ConfirmappointmentCtrl', function () {

  // load the controller's module
  beforeEach(module('contactsApp'));

  var ConfirmappointmentCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ConfirmappointmentCtrl = $controller('ConfirmappointmentCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ConfirmappointmentCtrl.awesomeThings.length).toBe(3);
  });
});
