var db = require('../db/db.js');
var dbHelper = require('../utils/dbHelper.js');
var userController = require('./user.controller.js');
var organizationController = require('./organization.controller.js');
var emergencyController = require('./emergency.controller.js');
var mobileLoginController = require('./mobileLogin.controller.js');
var signupController = require('./signup.controller.js');
var deviceTokenController = require('./deviceToken.controller.js');
var alertController = require('./alert.controller.js');

module.exports.controllers = {
	'user'				: userController['user'],
	'organization': organizationController['organization'],
	'emergency'	  : emergencyController['emergency'],
	'deviceToken' : deviceTokenController['deviceToken'],
	'alert'       : alertController['alert']
}

module.exports.authControllers = {
	'login' : mobileLoginController['login'],
	'signup': signupController['signup']
}
