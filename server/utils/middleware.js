var jwt = require('jsonwebtoken');
var secret = require('../env/config.js')['key'];

module.exports.tokenCheck = function(req, res, next){

	var token = req.headers['x-access-token'];

	if (token) {
		jwt.verify(token, secret.SECRET, function(err, decoded){
			if (err) {
				console.log('there was an error in the verify');
				return res.send(err.message);
			} else {
				console.log(decoded, "this had been decoded");
				req.user = decoded
				next();
			}
		});
	} else {
		return res.status(403).send("403 Error: Token does not exist");
	}
};
