'use strict';

angular.module('projApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('mypage', {
        url: '/mypage',
        templateUrl: 'app/mypage/mypage.html',
        controller: 'MypageCtrl'
      });
  });