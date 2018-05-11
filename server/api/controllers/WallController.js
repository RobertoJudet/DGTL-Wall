'use strict';


var mongoose = require('mongoose'),
	WallPost = mongoose.model('WallPosts');

exports.get_posts = function(req, res) {
	WallPost.find({}, function(err, task) {
		if (err)
			res.send(err);
		res.json(task);
	});
};
