var express = require('express'),
	app = express(),
	port = process.env.PORT || 3000,
	mongoose = require('mongoose'),
	WallPost = require('./api/models/WallModel'),
	bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/WallDB');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


var routes = require('./api/routes/WallRoutes');
routes(app);

app.listen(port);

console.log('DGTL-Wall RESTful API server started on: ' + port);

app.use(function(req, res) {
	res.status(404).send({url: req.originalUrl + ' not found'})
});