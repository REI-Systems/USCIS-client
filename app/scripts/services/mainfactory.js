'use strict';

/**
 * @ngdoc service
 * @name contactsApp.mainFactory
 * @description
 * # mainFactory
 * Factory in the contactsApp.
 */
angular.module('contactsApp')
  .factory('mainFactory', function () {
    // Service logic
    // ...

    var factoryContacts = [];

    // Public API here
    return {
      getContacts: function () {
        return factoryContacts;
      },
      addContact: function(newContact) {
        factoryContacts.push(newContact);
      }
    };
  });
