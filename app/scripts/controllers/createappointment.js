'use strict';

/**
 * @ngdoc function
 * @name contactsApp.controller:CreateappointmentCtrl
 * @description
 * # CreateappointmentCtrl
 * Controller of the contactsApp
 */
angular.module('contactsApp')
  .controller('CreateappointmentCtrl', ['$location', '$scope', 'mainFactory', function ($location, $scope, mainFactory) {

      // Do not show the available timeslots when we first arrive at the create appointment page
      $scope.showTimeslots = false;

    // Helper function to support ngClick directive from the page. This navigates to the passed in route
    $scope.navigate = function(page) {
      $location.path(page);
    };

    // When the user selects the location, store the selected location in the factory
    $scope.updateLocation = function() {
      mainFactory.setLocation($scope.appointmentLocation);
      $scope.showTimeSlots = true;
    };


    $scope.timeslots = mainFactory.getTimeslots();
  }]);
