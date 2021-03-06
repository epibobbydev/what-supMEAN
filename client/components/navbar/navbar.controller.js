'use strict';

angular.module('projApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth) {
    $scope.menu = [
		{ 'title': 'Home', 'link': '/' },
		{ 'title': 'What\'s Up', 'link': '/articles' },
		{ 'title': 'My Posts', 'link': '/articles' }
	];

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });