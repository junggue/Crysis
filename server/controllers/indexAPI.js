var db = require('../db/db.js');
var dbHelper = require('../utils/dbHelper.js');
var userController = require('./user.controller.js');
var organizationController = require('./organization.controller.js');
var emergencyController = require('./emergency.controller.js');
var createEmployeeController = require('./createEmployee.controller.js');
var loginController = require('./login.controller.js');
var createOrgController = require('./createOrg.controller.js');
var createAdminController = require('./createAdmin.controller.js');

module.exports.controllers = {
	'user'				  : userController['user'],
	'organization'  : organizationController['organization'],
	'emergency'	    : emergencyController['emergency'],
	'createEmployee': createEmployeeController['createEmployee']
}

module.exports.authControllers = {
	'login'      : loginController['login'],
	'createOrg'  : createOrgController['createOrg'],
	'createAdmin': createAdminController['createAdmin']
}
