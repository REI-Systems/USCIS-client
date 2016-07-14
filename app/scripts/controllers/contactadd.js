'use strict';

/**
 * @ngdoc function
 * @name contactsApp.controller:ContactaddCtrl
 * @description
 * # ContactaddCtrl
 * Controller of the contactsApp
 */
angular.module('contactsApp')
  .controller('ContactaddCtrl', ['$scope', '$location', 'mainFactory', function ($scope, $location, mainFactory) {

    $scope.submit = function() {
      var newContact = angular.copy($scope.contact);
      mainFactory.addContact(newContact);
      $location.path('/contactList');
    };
  }]);
