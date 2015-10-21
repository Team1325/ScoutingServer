// BASE SETUP
// ======================================

// CALL THE PACKAGES --------------------
var express    = require('express');		// call express
var app        = express(); 				// define our app using express
var bodyParser = require('body-parser'); 	// get body-parser
var morgan     = require('morgan'); 		// used to see requests
var mongoose   = require('mongoose');
var Match       = require('./app/models/match');
var port       = process.env.PORT || 8100; // set the port for our app

// APP CONFIGURATION ---------------------
// use body parser so we can grab information from POST requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// configure our app to handle CORS requests
app.use(function(req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
	next();
});

// log all requests to the console
app.use(morgan('dev'));

// connect to our database (hosted on modulus.io)
mongoose.connect('mongodb://admin:admin@ds041934.mongolab.com:41934/scoutingserver');

// ROUTES FOR OUR API
// ======================================

// basic route for the home page
app.get('/', function(req, res) {
	res.send('Welcome to scouting!');
});

// get an instance of the express router
var apiRouter = express.Router();

// test route to make sure everything is working
// accessed at GET http://localhost:8080/api

// arun i hack ur code O.o!@#omg
apiRouter.get('/', function(req, res) {
	res.json({ message: 'hooray! welcome to our server!' });
});

// on routes that end in /users
// ----------------------------------------------------
apiRouter.route('/matches')

	// create a user (accessed at POST http://localhost:8080/users)
	.post(function(req, res) {

		var match = new Match();
		match.number = req.body.number;
		match.quadrant = req.body.quadrant;
		match.teleop = req.body.teleop;

		match.save(function(err) {
			if (err) {
					return res.send(err);
			}

			// return a message
			res.json({ message: 'Match saved!' });
		});

	})

	.get(function(req, res) {
		Match.find(function(err, matches) {
			if (err) res.send(err);
			res.json(matches);
		});
	});

// REGISTER OUR ROUTES -------------------------------
app.use('/api', apiRouter);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
