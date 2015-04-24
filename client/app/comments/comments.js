'use strict';

angular.module('projApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('comments', {
        url: '/comments',
        templateUrl: 'app/comments/comments.html',
        controller: 'CommentsCtrl'
      });
  });