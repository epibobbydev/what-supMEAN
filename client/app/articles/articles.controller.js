'use strict';

angular.module('projApp')
.controller('ArticlesCtrl', function ($scope, $http, $sce, socket) {
    $scope.newArticle = '';
	$scope.newComment = {};
	$scope.displayComment = [];
	$scope.typeLinkValues = [
		{name : 'Select your type', code : ''},
		{name : 'Youtube Video', code : 'video'},
		{name : 'Images', code : 'img'},
		{name : 'Link', code : 'link'}	
	];
	


function getArticle() {
	socket.unsyncUpdates('article');
	$http.get('/api/articles').success(function(articles) {
		$scope.articles = articles;
		angular.forEach(articles, function(article) {
			if (article.linkType === 'video') {
				article.linkSrc = $sce.trustAsHtml(article.linkSrc);
			}
			if (article.linkType === 'img') {
				article.linkSrc = $sce.trustAsResourceUrl (article.linkSrc);
			}
		});
		
		// Update array with any new or deleted items pushed from the socket
		socket.syncUpdates('article', $scope.articles, function(event, article, articles) {
			
			// sort the array every time its modified
			articles.sort(function(a, b) {
				a = new Date(a.date);
				b = new Date(b.date);
				return a>b ? -1 : a<b ? 1 : 0;
			});
		});
	});
}

getArticle();

// Clean up listeners when the controller is destroyed
$scope.$on('$destroy', function () {
	socket.unsyncUpdates('article');
});

$scope.isDisplay = function (idArticle) {
	var res = $scope.displayComment.indexOf(idArticle);
	if (res > -1) {
		return true;
	}
	else {
		return false;
	}
};


// Use our rest api to post a new article
$scope.addArticle = function() {
	$http.post('/api/articles', $scope.newArticle );
	$scope.newArticle = '';
};

$scope.incrementArticleUpvotes = function(idArticle) {
	$http.get('/api/articles/' + idArticle).success(function(article) {
		article.upvotes += 1;
		$http.put('/api/articles/'+idArticle, article);
	});
};

$scope.incrementArticleDownvotes = function(idArticle) {
	$http.get('/api/articles/' + idArticle).success(function(article) {
		article.downvotes += 1;
		$http.put('/api/articles/'+idArticle, article);
	});		
};


$scope.addComment = function(index, idArticle) {
	var content = document.getElementById('comment_'+index).value;
	if (content && content.trim() !== '')
	{
		$scope.newComment.article = idArticle;
		$scope.newComment.content = content;
		
		 $http.post('/api/comments', $scope.newComment ).success(function(comment){
				$scope.newComment = {};
				$http.get('/api/articles/' + idArticle).success(function(article) {
					article.comments.push(comment._id);
					$http.put('/api/articles/'+idArticle, article);
				});
			 });
	}
};

$scope.incrementCommentUpvotes = function(idComment) {
	$http.get('/api/comments/' + idComment).success(function(comment) {
		comment.upvotes += 1;
		$http.put('/api/comments/'+idComment, comment).success(function() {
			getArticle();
		});
	});		
};

$scope.incrementCommentDownvotes = function(idComment) {
	$http.get('/api/comments/' + idComment).success(function(comment) {
		comment.downvotes += 1;
		
		$http.put('/api/comments/'+idComment, comment).success(function() {
			getArticle();
		});
	});		
};

$scope.getComments = function(idArticle) {
	var index = $scope.displayComment.indexOf(idArticle);
	if (index === -1) {
		$scope.displayComment.push(idArticle);
	}
	else {
		$scope.displayComment.splice(index, 1);
	}
};


});
