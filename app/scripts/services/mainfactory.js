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
    var appointmentLocation = "";
    var timeslots = [
      {
        title:'9:00-9:30',
        available:'true'
      },
      {
        title:'9:30-10:00',
        available:'true'
      },
      {
        title:'10:00-10:30',
        available:'false'
      },
      {
        title:'10:30-11:00',
        available:'false'
      }
    ];

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
        text:'About',
        link:'#/contactList'
      },
      {
        text:'Support',
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
      getTimeslots: function () {
        return timeslots;
      },
      addContact: function(newContact) {
        factoryContacts.push(newContact);
      },
      setLocation: function(newAppointmentLocation){
          appointmentLocation = newAppointmentLocation;
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
