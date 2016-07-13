'use strict';

/**
 * @ngdoc function
 * @name contactsApp.controller:NavcontrollerCtrl
 * @description
 * # NavcontrollerCtrl
 * Controller of the contactsApp
 */
angular.module('contactsApp')
  .controller('NavcontrollerCtrl', function($scope, $location) {
    $scope.isActive = function(route) {
        return route === $location.path();
    };
  });
