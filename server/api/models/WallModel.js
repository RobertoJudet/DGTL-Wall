'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var WallPostSchema = new Schema({
	type: {
		type: String,
		required: true
	},
	content: {
		type: String,
		required: true
	},
	x: {
		type: Number,
		required: true
	},
	y: {
		type: Number,
		required: true
	},
	Created_date: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('WallPosts', WallPostSchema);
