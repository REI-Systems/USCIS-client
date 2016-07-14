'use strict';

/**
 * @ngdoc overview
 * @name contactsApp
 * @description
 * # contactsApp
 *
 * Main module of the application.
 */
angular
  .module('contactsApp', [
    'ngAnimate',
    'ngAria',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'datePicker',
      '720kb.datepicker'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/home', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/contactList', {
        templateUrl: 'views/contactlist.html',
        controller: 'ContactlistCtrl',
        controllerAs: 'contactList'
      })
      .when('/contactAdd', {
        templateUrl: 'views/contactadd.html',
        controller: 'ContactaddCtrl',
        controllerAs: 'contactAdd'
      })
      .when('/formtest', {
        templateUrl: 'views/formtest.html',
        controller: 'FormtestCtrl',
        controllerAs: 'formtest'
      })
      .when('/createAppointment', {
        templateUrl: 'views/createappointment.html',
        controller: 'CreateappointmentCtrl',
        controllerAs: 'createAppointment'
      })
      .when('/manageAppointment', {
        templateUrl: 'views/manageappointment.html',
        controller: 'ManageappointmentCtrl',
        controllerAs: 'manageAppointment'
      })
      .when('/confirmAppointment', {
        templateUrl: 'views/confirmappointment.html',
        controller: 'ConfirmappointmentCtrl',
        controllerAs: 'confirmAppointment'
      })
      .when('/chooseLocation', {
        templateUrl: 'views/chooselocation.html',
        controller: 'ChooselocationCtrl',
        controllerAs: 'chooseLocation'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
