/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var User = require('../api/user/user.model');
var Article = require('../api/article/article.model');


User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    name: 'Sarah Connor',
    email: 'sarah@connor.com',
    password: 'sarah'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, function() {
      console.log('finished populating users');
    }
  );
});


Article.find({}).remove(function() {
var idBobby = '';
User.create({
    provider: 'local',
    name: 'Bobby',
    email: 'bobby@test.com',
    password: 'bobby'
  }, function(err, user) {
		idBobby = user._id;
		Article.create(
	{
		"author" : idBobby,
		"title" : "And all other social media are like",
		"linkType" : "img",
		"linkSrc" : "http://img-9gag-fun.9cache.com/photo/axZ49KM_700b.jpg",
		"content" : "",
		"comments" : [ 
		],
		"upvotes" : 5,
		"downvotes" : 8
	},
   {
		"author" : idBobby,
		"title" : "Mind game...",
		"linkType" : "img",
		"linkSrc" : "http://img-9gag-fun.9cache.com/photo/am0Rbd4_700b.jpg",
		"content" : "Tough question",
		"comments" : [ 
		],
		"upvotes" : 12,
		"downvotes" : 3
	},
	{
		"author" : idBobby,
		"title" : "Brace yourselves summer is comming...",
		"linkType" : "img",
		"linkSrc" : "http://img-9gag-fun.9cache.com/photo/aqNDD4Q_700b.jpg",
		"content" : "Do not forget the sunglasses !",
		"comments" : [ 
		],
		"upvotes" : 5,
		"downvotes" : 8
	},
	{
		"author" : idBobby,
		"title" : "Lorm Ipsum",
		"content" : "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repella",
		"comments" : [ 
		],
		"upvotes" : 1,
		"downvotes" : 8
	},
	{
		"author" : idBobby,
		"title" : "Go old time",
		"linkType" : "video",
		"linkSrc" : '<iframe width="560" height="315" src="https://www.youtube.com/embed/nvSlgcQl3Iw" frameborder="0" allowfullscreen></iframe>',
		"content" : "Do not forget the sunglasses !",
		"comments" : [ 
		],
		"upvotes" : 5,
		"downvotes" : 8
	}
, function(err) {
		if (err)
			console.dir(err);
      console.log('finished populating article for user bobby');
    });
  });
  
  var idEpi = '';
User.create({
    provider: 'local',
    name: 'Epi taf',
    email: 'epi@test.com',
    password: 'epi'
  }, function(err, user) {
		idEpi = user._id;
	Article.create(
   {
		"author" : idEpi,
		"title" : "Mind game...",
		"linkType" : "img",
		"linkSrc" : "http://img-9gag-fun.9cache.com/photo/am0Rbd4_700b.jpg",
		"content" : "Tough question",
		"comments" : [ 
		],
		"upvotes" : 12,
		"downvotes" : 3
	},
	{
		"author" : idEpi,
		"title" : "And your body start moving by itself",
		"linkType" : "video",
		"linkSrc" : '<iframe width="420" height="315" src="https://www.youtube.com/embed/H3LYfnMOjw8" frameborder="0" allowfullscreen></iframe>',
		"content" : "Do not forget the sunglasses !",
		"comments" : [ 
		],
		"upvotes" : 5,
		"downvotes" : 8
	},
	{
		"author" : idEpi,
		"title" : "Lorem Ipsum",
		"linkType" : "img",
		"linkSrc" : "http://img-9gag-fun.9cache.com/photo/aZxvXN0_700b_v1.jpg",
		"content" : "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repella",
		"comments" : [ 
		],
		"upvotes" : 1,
		"downvotes" : 8
	},
	{
		"author" : idEpi,
		"title" : "Very accurate map ...",
		"linkType" : "img",
		"linkSrc" : "http://img-9gag-fun.9cache.com/photo/ae0W40W_700b.jpg",
		"content" : "Do not forget the sunglasses !",
		"comments" : [ 
		],
		"upvotes" : 5,
		"downvotes" : 8
	},
	{
		"author" : idEpi,
		"title" : "Awaken Titan",
		"linkType" : "img",
		"linkSrc" : "http://img-9gag-fun.9cache.com/photo/azEQZVx_700b.jpg",
		"content" : "",
		"comments" : [ 
		],
		"upvotes" : 5,
		"downvotes" : 8
	}
, function(err) {
		if (err)
			console.dir(err);
      console.log('finished populating article for user epi taf');
    });
  });

	
	
	
});