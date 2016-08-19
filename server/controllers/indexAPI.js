var db = require('../db/db.js');
var dbHelper = require('../utils/dbHelper.js');
var userController = require('./user.controller.js');
var organizationController = require('./organization.controller.js');
var emergencyController = require('./emergency.controller.js');
var mobileLoginController = require('./mobileLogin.controller.js');
var adminLoginController = require('./adminLogin.controller.js');
var createAdminController = require('./createAdmin.controller.js');
var deviceTokenController = require('./deviceToken.controller.js');
var alertController = require('./alert.controller.js');
var statusUpdateController = require('./statusUpdate.controller.js');
var webloginController = require('./webLogin.controller.js');


module.exports.controllers = {
	'user'				  : userController['user'],
	'organization'  : organizationController['organization'],
	'emergency'	    : emergencyController['emergency'],
	'deviceToken'   : deviceTokenController['deviceToken'],
	'alert'         : alertController['alert'],
	'statusUpdate'  : statusUpdateController['statusUpdate']
}

module.exports.authControllers = {
	'mobileLogin': mobileLoginController['mobileLogin'],
	'adminLogin' : adminLoginController['adminLogin'],
	'createAdmin': createAdminController['createAdmin'],
	'webLogin' : webloginController['webLogin']
}
