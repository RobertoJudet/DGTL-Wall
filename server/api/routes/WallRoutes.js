'use strict';
module.exports = function (app) {
	var wall = require('../controllers/WallController');
	
	app.route('/papirs')
		.get(wall.get_papirs)
		.post(wall.create_papir);
		// .delete(wall.delete_papir);
	
	app.route('/papirs/:accessKey')
		.get(wall.get_permissions);
	
	// app.route('/keys')
	// 	.post(wall.add_keys);
};

