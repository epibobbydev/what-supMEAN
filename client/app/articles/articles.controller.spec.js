'use strict';

describe('Controller: ArticlesCtrl', function () {

  // load the controller's module
  beforeEach(module('projApp'));
  beforeEach(module('socketMock'));
  
  var ArticlesCtrl, scope, $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
	$httpBackend = _$httpBackend_;
	
	$httpBackend.expectGET('/api/articles')
    .respond(['HTML5 Boilerplate', 'AngularJS', 'Karma', 'Express']);

    scope = $rootScope.$new();
    ArticlesCtrl = $controller('ArticlesCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
	$httpBackend.flush();
    expect(scope.articles.length).toBe(4);
  });
});
