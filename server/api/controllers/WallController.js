'use strict';

var mongoose = require('mongoose'),
	WallPost = mongoose.model('WallPosts'),
	AllowedKeys = mongoose.model('AllowedKeys');
var ObjectId = mongoose.Types.ObjectId;
var _ = require('lodash');

exports.get_papirs = function (req, res) {
	// returns all documents
	WallPost.find({}, function (err, allPosts) {
		if (err)
			res.send(err);
		res.json(allPosts);
	});
};

exports.get_permissions = function (req, res) {
	var accessKey = req.params.accessKey;
	AllowedKeys.find({ name: accessKey }, function (err, record) {
		if (err)
			res.json({ 'allowedToPost': false });

		if (_.isEmpty(record)) {
			res.json({ 'allowedToPost': false });
		} else {
			res.json({ 'allowedToPost': true });
		}
	});
};

exports.create_papir = function (req, res) {

	var accessKey = req.body.data.key;
	if (!accessKey) {
		res.json({ message: 'Where is the key, dude?' });
		return;
	}
	var new_papir = new WallPost(req.body.data);
	new_papir.save(function (err, papir) {
		if (err)
			res.send(err);
		removeKey(accessKey);
		res.json({ message: 'Papir successfully added' });
	});
};

exports.delete_papir = function (req, res) {
	WallPost.remove({
		_id: req.params.papirId
	}, function (err, papir) {
		if (err)
			res.send(err);
		res.json({ message: 'Papir successfully deleted' });
	});
};

exports.add_keys = function (req, res) {
	var new_key = new AllowedKeys(req.body);
	new_key.save(function (err, list) {
		if (err)
			res.send(err);
		res.json({ message: 'Key successfully added' });
	});
};

var removeKey = function (accessKey) {
	AllowedKeys.remove({ name: accessKey }, function (err, task) {

	});
};
