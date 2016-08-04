var db = require('../db.js');
var dbHelper = require('../utils/dbHelper.js');

module.exports = {
	'emergency': {
		get: function(req, res){
			if(req.query.id && req.query.column) {
				dbHelper.getElement(req, res, db.Emergency, req.query.id, req.query.column);
			} else if(req.query.id && !req.query.column) {
				dbHelper.getRecord(req, res, db.Emergency, req.query.id);
			} else if(!req.query.id && req.query.column && req.query.value) {
				dbHelper.getAll(req, res, db.Emergency, req.query.column, req.query.value);
			} else {
				dbHelper.getAll(req, res, db.Emergency);
			};
		},
		post: function(req, res) {
			var newData = {
					instructions		: req.body.instructions,
					emergencyType		: req.body.emergencyType,
					emergencyStatus	: req.body.name,
					orgSalt					: req.body.role,
					orgHash					: req.body.warden,
					password				: req.body.status
				}
				dbHelper.insertData(req, res, db.Emergency, newData);
		},
		put: function(req, res) {
			if(req.query.id && req.query.column) {
				var newColumnData = {};
				newColumnData[req.query.column] = req.body[req.query.column];
				dbHelper.updateData(req, res, db.Emergency, req.query.id, newColumnData);
			} else {
				res.status(500).send("wrong query");
			}
		},
		delete: function(req, res) {
			dbHelper.deleteData(req, res, db.Emergency, req.query.id);
		}
	}
}