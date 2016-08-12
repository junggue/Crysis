var db = require('../db/db.js');
var dbHelper = require('../utils/dbHelper.js');
var userController = require('./user.controller.js');
var organizationController = require('./organization.controller.js');
var emergencyController = require('./emergency.controller.js');
var createEmployeeController = require('./createEmployee.controller.js');
var mobileLoginController = require('./mobileLogin.controller.js');
var adminLoginController = require('./adminLogin.controller.js');
var createOrgController = require('./createOrg.controller.js');
var createAdminController = require('./createAdmin.controller.js');
var deviceTokenController = require('./deviceToken.controller.js');
var alertController = require('./alert.controller.js');

module.exports.controllers = {
	'user'				  : userController['user'],
	'organization'  : organizationController['organization'],
	'emergency'	    : emergencyController['emergency'],
	'createEmployee': createEmployeeController['createEmployee']
	'deviceToken' : deviceTokenController['deviceToken'],
	'alert'       : alertController['alert']
}

module.exports.authControllers = {
	'mobileLogin': mobileLoginController['mobileLogin'],
	'adminLogin' : adminLoginController['adminLogin'],
	'createOrg'  : createOrgController['createOrg'],
	'createAdmin': createAdminController['createAdmin']
