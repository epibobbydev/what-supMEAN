'use strict';

describe('Controller: CommentsCtrl', function () {

  // load the controller's module
  beforeEach(module('projApp'));
  beforeEach(module('socketMock'));

  var CommentsCtrl, scope, $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
	$httpBackend = _$httpBackend_;

	$httpBackend.expectGET('/api/comments')
    .respond(['HTML5 Boilerplate', 'AngularJS', 'Karma', 'Express']);

    scope = $rootScope.$new();
    CommentsCtrl = $controller('CommentsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
	$httpBackend.flush();
    expect(scope.comments.length).toBe(4);
  });
});
