'use strict';

describe('Controller: CreateappointmentCtrl', function () {

  // load the controller's module
  beforeEach(module('contactsApp'));

  var CreateappointmentCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CreateappointmentCtrl = $controller('CreateappointmentCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CreateappointmentCtrl.awesomeThings.length).toBe(3);
  });
});
