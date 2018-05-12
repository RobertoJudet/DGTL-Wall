'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var WallPostSchema = new Schema({
	type: {
		type: String,
		required: true
	},
	content: {
		//type: String for links, BSON for images
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

var AllowedKeysSchema = new Schema({
	name: {
		type: String,
		required: true
	}
});

module.exports = mongoose.model('WallPosts', WallPostSchema);
module.exports = mongoose.model('AllowedKeys', AllowedKeysSchema);
