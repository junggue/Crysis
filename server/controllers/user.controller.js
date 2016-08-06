var db = require('../db/db.js');
var dbHelper = require('../utils/dbHelper.js');

module.exports = {
	'user': {
		get: function(req, res){
			if(req.query.id && req.query.column){
				dbHelper.getElement(req, res, db.Employee, req.query.id, req.query.column);
			} else if(req.query.id && !req.query.column){
				dbHelper.getRecord(req, res, db.Employee, req.query.id);
			} else if(!req.query.id && req.query.column && req.query.value){
				dbHelper.getAll(req, res, db.Employee, req.query.column, req.query.value);
			} else {
				dbHelper.getAll(req, res, db.Employee);
			};
		},
		post: function(req, res){
			var newData = {
				username   : req.body.username,
				email      : req.body.email,
				name       : req.body.name,
				isWarden   : req.body.isWarden,
				wardenName : req.body.wardenName,
				status     : req.body.status,
				isAdmin    : req.body.isAdmin,
				password   : req.body.password,
				OrganizationId : req.body.OrganizationId
			}
			dbHelper.insertData(req, res, db.Employee, newData);
		},
		put: function(req, res){
			if(req.query.id && req.query.column){
				var newColumnData = {};
				newColumnData[req.query.column] = req.body[req.query.column];
				dbHelper.updateData(req, res, db.Employee, req.query.id, newColumnData);
			} else{
				res.status(500).send("wrong query");
			}
		},
		delete: function(req, res){
			dbHelper.deleteData(req, res, db.Employee, req.query.id);
		}
	}
}
