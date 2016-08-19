var db = require('../db/db.js');
var dbHelper = require('../utils/dbHelper.js');

module.exports = {
	'user': {
		get: function(req, res){
			(function(){
				if(req.query.id && req.query.column){
					return dbHelper.getElement(db.Employee, req.query.id, req.query.column)
				} else if(req.query.id && !req.query.column){
					return dbHelper.getRecord(db.Employee, req.query.id)
				} else if(!req.query.id && req.query.column && req.query.value){
					return dbHelper.getAll(db.Employee, req.query.column, req.query.value)
				} else {
					return dbHelper.getAll(db.Employee)
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
			var newUser = {
				username			: req.body.username,
				email					: req.body.email,
				name					: req.body.name,
				isWarden			: req.body.isWarden,
				wardenName		: req.body.wardenName,
				status				: req.body.status,
				isAdmin				: req.body.isAdmin,
				password			: req.body.password,
				OrganizationId: req.body.OrganizationId
			}
			dbHelper.insertData(db.Employee, newUser)
				.then(function(data){
					res.status(200).send(data);
				})
				.catch(function(err){
					res.status(500).send(err.message);
				});
		},
		put: function(req, res){
			if(req.query.id && req.query.column){
				var newColumnData = {};
				newColumnData[req.query.column] = req.body[req.query.column];
				dbHelper.updateData(req, res, db.Employee, req.query.id, newColumnData)
					.then(function(data){
						res.status(200).send("successfully updated");
					})
					.catch(function(err){
						res.status(500).send(err.message);
					});
			} else if(req.query.id && !req.query.column){
				var updatedUser = {
					username			: req.body.username,
					email					: req.body.email,
					name					: req.body.name,
					isWarden			: req.body.isWarden,
					wardenName		: req.body.wardenName,
					status				: req.body.status,
					isAdmin				: req.body.isAdmin,
					password			: req.body.password,
					OrganizationId: req.body.OrganizationId
				}
				// dbHelper.insertData(db.Employee, updatedUser)
				db.Employee.find({where:{id:req.query.id}})
					.then(function(row){
						return row.updateAttributes({
							username			: req.body.username,
							email					: req.body.email,
							name					: req.body.name,
							isWarden			: req.body.isWarden,
							wardenName		: req.body.wardenName,
							status				: req.body.status,
							isAdmin				: req.body.isAdmin,
							password			: req.body.password
						});
					})
					.then(function(data){
						res.status(200).send(data);
					})
					.catch(function(err){
						res.status(500).send(err.message);
					});
			} else{
				res.status(500).send("wrong query");
			}
		},
		delete: function(req, res){
			dbHelper.deleteData(db.Employee, req.query.id)
				.then(function(data){
					res.status(200).send("successfully updated");
				})
				.catch(function(err){
					res.status(500).send(err.message);
				});
		}
	}
}