var db = require('../db/db.js');
var bcrypt = require('bcrypt');

//Verify password matches on login
exports.verifyPassword = function(password, enteredPw) {
	return new Promise(function(resolve, reject) {
    bcrypt.compare(enteredPw, password, function(err, res) {
      if (err) {
				return reject(err);
			}
      return resolve(res);
    });
  });
}
