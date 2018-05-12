var express = require('express'),
	app = express(),
	port = process.env.PORT || 2000,
	mongoose = require('mongoose'),
	WallPost = require('./api/models/WallModel'),
	bodyParser = require('body-parser'),
	helmet = require('helmet')
	cors = require('cors');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/WallDB');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(helmet());
app.use(cors());

var routes = require('./api/routes/WallRoutes');
routes(app);

app.listen(port);

console.log('DGTL-Wall RESTful API server started on: ' + port);

app.use(function(req, res) {
	res.status(404).send({url: req.originalUrl + ' not found'})
});
