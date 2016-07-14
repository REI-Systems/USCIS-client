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

    // Initialize the naviagtion links, defaulting to an applicant role
 //   var navLinks = [
 //     {
 //       text:'Home',
 //       link:'#/home'
 //     },
 //     {
 //       text:'Resources',
 //       link:'#/resources'
 //     }
 //   ];

    var navLinks = [
      {
        text:'Home',
        link:'#/home'
      },
      {
        text:'Contact List',
        link:'#/contactList'
      },
      {
        text:'Contact Add',
        link:'#/contactAdd'
      }
    ];



    // Public API here
    return {
      getLinks: function () {
        return navLinks;
      },
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
