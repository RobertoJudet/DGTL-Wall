'use strict';

var mongoose = require('mongoose'),
	WallPost = mongoose.model('WallPosts'),
	AllowedKeys = mongoose.model('AllowedKeys');
var ObjectId = mongoose.Types.ObjectId;
var _ = require('lodash');

exports.get_papirs = function (req, res) {
	WallPost.find({}, function (err, papirs) {
		if (err)
			res.send(err);
		res.json(papirs);
	});
};

exports.get_permissions = function (req, res) {
	var papirKey = req.params.papirKey;
	AllowedKeys.find({"_id" : ObjectId("5af6ed54844d541f919183fe")}, function (err, record) {
		if (err)
			res.send(err);
		var keysList = record[0].list[0];
		var isTheKeyAllowed = _.includes(keysList, papirKey);
		res.json({'allowedToPost' : isTheKeyAllowed});
	});
};

exports.create_papir = function (req, res) {
	var new_papir = new WallPost(req.body);
	new_papir.save(function (err, papir) {
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

exports.add_keys = function (req, res) {
	var new_keys = new AllowedKeys(req.body);
	new_keys.save(function (err, keysList) {
		if (err)
			res.send(err);
		res.json({message: 'List of keys successfully added'});
	});
};
