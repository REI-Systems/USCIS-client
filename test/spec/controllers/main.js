'use strict';

describe('MainCtrl', function () {

  // load the controller's module
  beforeEach(module('contactsApp'));

  var MainCtrl,
    scope,
    location;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootlocation, $rootScope) {
    scope = $rootScope.$new();
    location=$rootlocation.$new();
    MainCtrl = $controller('MainCtrl', {
      $location: location,
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    console.log(MainCtrl);
    MainCtrl.navigate('/test');
    expect(MainCtrl.navigate()).toBe('/test');
  });
});
