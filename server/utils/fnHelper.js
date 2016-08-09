var db = require('../db/db.js');
var bcrypt = require('bcrypt');

//Verify password matches on login
exports.verifyPassword = function(password, enteredPw) {
	return new Promise(function(resolve, reject) {
    console.log('in promise in verify ', password, enteredPw);
    bcrypt.compare(password, enteredPw, function(err, res) {
      if (err) {
        console.log('password ', password);
        console.log('attemtped ', enteredPw);
        console.log('err in verifying pw ', err);
				return reject(err);
			}
      resolve(res);
      console.log('res in verify pw ', res);
    });
  });
}
