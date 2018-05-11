'use strict';
module.exports = function(app) {
	var wall = require('../controllers/WallController');
	
	// app.route('/:uuid:x:y:type:content')
	// 	.post(wall.post_story);
	
	app.route('/')
		.get(wall.get_posts)
};
