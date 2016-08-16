var db = require('../db/db.js');
var dbHelper = require('../utils/dbHelper.js');

module.exports = {
	'organization': {
		get: function(req, res){
			(function(){
				if(req.query.id && req.query.column){
					return dbHelper.getElement(db.Organization, req.query.id, req.query.column)
				} else if(req.query.id && !req.query.column){
					return dbHelper.getRecord(db.Organization, req.query.id)
				} else if(!req.query.id && req.query.column && req.query.value){
					return dbHelper.getAll(db.Organization, req.query.column, req.query.value)
				} else {
					return dbHelper.getAll(db.Organization)
				};
			})()
				.then(function(data) {
					res.status(200).send(data);
				})
				.catch(function(err) {
					res.status(500).send(err.message);
				});
		},
		post: function(req, res){
			var newOrg = {
				username				: req.body.username,
				password				: req.body.password
			}
			dbHelper.insertData(db.Organization, newOrg)
				.then(function(data){
					res.status(200).send("successfully posted");
				})
				.catch(function(err){
					res.status(500).send(err.message);
				});
		},
		put: function(req, res){
			if(req.query.id && req.query.column){
				var newColumnData = {};
				newColumnData[req.query.column] = req.body[req.query.column];
				dbHelper.updateData(req, res, db.Organization, req.query.id, newColumnData)
					.then(function(data){
						res.status(200).send("successfully updated");
					})
					.catch(function(err){
						res.status(500).send(err.message);
					});
			} else{
				res.status(500).send("wrong query");
			}
		},
		delete: function(req, res){
			dbHelper.deleteData(db.Organization, req.query.id)
				.then(function(data){
					res.status(200).send("successfully updated");
				})
				.catch(function(err){
					res.status(500).send(err.message);
				});
		}
	}
}
