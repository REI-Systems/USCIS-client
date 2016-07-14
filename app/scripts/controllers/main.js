'use strict';

/**
 * @ngdoc function
 * @name contactsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the contactsApp
 */
angular.module('contactsApp')
  .controller('MainCtrl', ['$location', '$scope', function ($location, $scope) {

    $scope.navigate = function(page) {
      $location.path(page);
    };
  }]);
