'use strict';

/**
 * @ngdoc function
 * @name contactsApp.controller:ContactaddCtrl
 * @description
 * # ContactaddCtrl
 * Controller of the contactsApp
 */
angular.module('contactsApp')
  .controller('ContactaddCtrl', ['$scope', 'mainFactory', function ($scope, mainFactory) {

    $scope.submit = function(contact) {
      mainFactory.addContact(contact);
    };
  }]);
