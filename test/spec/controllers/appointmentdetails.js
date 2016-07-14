'use strict';

describe('Controller: AppointmentdetailsCtrl', function () {

  // load the controller's module
  beforeEach(module('contactsApp'));

  var AppointmentdetailsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AppointmentdetailsCtrl = $controller('AppointmentdetailsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AppointmentdetailsCtrl.awesomeThings.length).toBe(3);
  });
});
