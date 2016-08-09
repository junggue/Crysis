var db = require('../db/db.js');
var dbHelper = require('../utils/dbHelper.js');
var userController = require('./user.controller.js');
var organizationController = require('./organization.controller.js');
var emergencyController = require('./emergency.controller.js');
var loginController = require('./login.controller.js');
var signupController = require('./signup.controller.js');

module.exports = {
	'user'				: userController['user'],
	'organization': organizationController['organization'],
	'emergency'	  : emergencyController['emergency'],
	'login' : loginController['login'],
	'signup': signupController['signup']
}
