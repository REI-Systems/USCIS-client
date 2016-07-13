'use strict';

/**
 * @ngdoc function
 * @name contactsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the contactsApp
 */
angular.module('contactsApp')
  .controller('AboutCtrl', ['$scope', 'mainFactory', function ($scope, mainFactory) {

    var apiPromise = mainFactory.getPosts();
    $scope.posts = [];

    apiPromise.then(
      function (apiResult) {
        angular.forEach(apiResult, function(post){
          $scope.posts.push(
            {
              'userid': post.userId,
              'id': post.id,
              'title': post.title,
              'body': post.body
            }
          );
        });
      }).catch(
      function (error) {
        console.log(error);
        //Do Nothing
      });
  }]);
