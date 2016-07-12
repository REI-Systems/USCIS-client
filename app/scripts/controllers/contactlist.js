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
    $scope.contacts = [
      {
        name:'Bob Weber',
        email:'bob@bob.com',
        phone:'123-456-7890'
      },
      {
        name:'John Smith',
        email:'john@john.com',
        phone:'123-456-7890'
      }
    ];

    $scope.contacts.concat(mainFactory.getContacts());

  }]);
