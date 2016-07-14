'use strict';

describe('Controller: ManageappointmentCtrl', function () {

  // load the controller's module
  beforeEach(module('contactsApp'));

  var ManageappointmentCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ManageappointmentCtrl = $controller('ManageappointmentCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ManageappointmentCtrl.awesomeThings.length).toBe(3);
  });
});
