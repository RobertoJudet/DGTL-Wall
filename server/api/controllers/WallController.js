'use strict';

var mongoose = require('mongoose'),
	WallPost = mongoose.model('WallPosts');

exports.get_papirs = function (req, res) {
	WallPost.find({}, function (err, task) {
		if (err)
			res.send(err);
		res.json(task);
	});
};

exports.get_papir_key_info = function (req, res) {
	//TO DO: check if the key is allowed, return bool
	res.json(req.params.papirKey);
};

exports.create_papir = function (req, res) {
	var new_post = new WallPost(req.body);
	new_post.save(function (err, papir) {
		if (err)
			res.send(err);
		res.json({message: 'Papir successfully added'});
	});
};

exports.delete_papir = function (req, res) {
	WallPost.remove({
		_id: req.params.papirId
	}, function (err, papir) {
		if (err)
			res.send(err);
		res.json({message: 'Papir successfully deleted'});
	});
};
