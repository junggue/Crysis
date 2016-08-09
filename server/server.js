var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var router = require('./router/router.js');
var testRouter = require('./router/testRouter.js');
var dummyData = require('./db/dummyData.js');

app.use(bodyParser.json());

app.use(express.static('./'));

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Date, X-Api-Version, X-File-Name');
  next();
});

app.set('port', process.env.PORT || 3000);

// app.use('/api', testRouter);
app.use('/api', router);
app.use(function(req, res) {
	res.send('404: Page not Found', 404);
});

app.listen(app.get('port'), function() {
	console.log('Server listening on port ', app.get('port'));
});

module.exports = app;