var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(express.static('./'));
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function() {
    console.log('Server listening on port ', app.get('port'));
});

app.use(function(req, res) {
 res.send('404: Page not Found', 404);
});

module.exports = app;
