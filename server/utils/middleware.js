var jwt = require('jsonwebtoken');

module.exports.tokenCheck = function(req, res, next){
	var token = req.body.token;

	if (token) {

		//process.env.secret : secret key
		//public string can be used(?)
		jwt.verify(token, process.env.secret, function(err, decoded){
			if (err) {
				return res.send(err.message);
			} else {
				//add a new property for decoded token.
				req.decodedToken = decoded;
				next()
			}
		});

	} else {
		return res.status(403).send("");
	}
};