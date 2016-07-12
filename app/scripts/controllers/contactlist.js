'use strict';

/**
 * @ngdoc function
 * @name contactsApp.controller:ContactlistCtrl
 * @description
 * # ContactlistCtrl
 * Controller of the contactsApp
 */
angular.module('contactsApp')
  .controller('ContactlistCtrl', ['$scope', 'mainFactory', function ($scope, mainFactory) {

    var factoryContacts = mainFactory.getContacts();
    $scope.contacts = factoryContacts;

  }]);
