var db = require('../db/db.js');
var dbHelper = require('../utils/dbHelper.js');

module.exports = {
	'organization': {
		get: function(req, res){
			if(req.query.id && req.query.column){
			dbHelper.getElement(req, res, db.Organization, req.query.id, req.query.column);
			} else if(req.query.id && !req.query.column){
				dbHelper.getRecord(req, res, db.Organization, req.query.id);
			} else if(!req.query.id && req.query.column && req.query.value){
				dbHelper.getAll(req, res, db.Organization, req.query.column, req.query.value);
			} else {
				dbHelper.getAll(req, res, db.Organization);
			};
		},
		post: function(req, res){
			var newOrg = {
				username				: req.body.username,
				safezone				: req.body.safezone,
				emergencyStatus	: req.body.emergencyStatus,
				orgSalt					: req.body.orgSalt,
				orgHash					: req.body.orgHash,
				password				: req.body.password,
				EmergencyId			: req.body.EmergencyId
			}
			dbHelper.insertData(req, res, db.Organization, newOrg);
		},
		put: function(req, res){
			if(req.query.id && req.query.column){
				var newColumnData = {};
				newColumnData[req.query.column] = req.body[req.query.column];
				dbHelper.updateData(req, res, db.Organization, req.query.id, newColumnData);
			} else{
				res.status(500).send("wrong query");
			}
		},
		delete: function(req, res){
			dbHelper.deleteData(req, res, db.Organization, req.query.id);
		}
	}
}
