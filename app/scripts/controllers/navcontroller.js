'use strict';

/**
 * @ngdoc function
 * @name contactsApp.controller:NavcontrollerCtrl
 * @description
 * # NavcontrollerCtrl
 * Controller of the contactsApp
 */
angular.module('contactsApp')
  .controller('NavcontrollerCtrl', ['$scope', '$location', 'mainFactory', function ($scope, $location, mainFactory) {
    $scope.links = mainFactory.getLinks();
    $scope.isActive = function(route) {
        return route === "#" + $location.path();
    };
  }]);
