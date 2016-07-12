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

    var contacts = [];

    // Public API here
    return {
      getContacts: function () {
        return contacts;
      },
      addContact: function(contact) {
        console.log('Added contact');
        console.log(contact);
        contacts.concat(contact);
      }
    };
  });
