'use strict';

/**
 * @ngdoc service
 * @name contactsApp.mainFactory
 * @description
 * # mainFactory
 * Factory in the contactsApp.
 */
angular.module('contactsApp')
  .factory('mainFactory',['$q', '$http', function ($q, $http) {
    // Service logic
    // ...

    var factoryContacts = [];
    var baseUrl = "http://jsonplaceholder.typicode.com/";

    // Public API here
    return {
      getContacts: function () {
        return factoryContacts;
      },
      addContact: function(newContact) {
        factoryContacts.push(newContact);
      },
      getPosts: function () {
        var deferred = $q.defer();
        $http.get(baseUrl + 'posts').success(function (data) {
          deferred.resolve(data);
        }).error(function (data) {
          deferred.reject(data);
        });
        return deferred.promise;
      }
    };
  }]);
