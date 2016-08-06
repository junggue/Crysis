var db = require('../db/db.js');
var dbHelper = require('../utils/dbHelper.js');
var loginController = require('../controllers/login.controller.js');
var signupController = require('../controllers/signup.controller.js');

module.exports = {
	'login' : loginController['login'],
	'signup': signupController['signup']
}
