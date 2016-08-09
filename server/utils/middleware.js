var jwt = require('jsonwebtoken');
var secret = require('../env/config.js')['key'];

module.exports.tokenCheck = function(req, res, next){

	var token = req.headers['x-access-token'];

	if (token) {
		console.log("MIDDLEWARE")
		jwt.verify(token, secret.SECRET, function(err, decoded){
			if (err) {
				return res.send(err.message);
			} else {
				next();
			}
		});
	} else {
		return res.status(403).send("403 Error: Token does not exist");
	}
};