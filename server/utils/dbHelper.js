var db = require('../db.js');

	//POST
	exports.insertData = function(req, res, table, newData){
		table.create(newData)
			.then(function(data){
				res.status(200).send(data);
			})
			.catch(function(err){
				res.status(500).send(err.message);
			});
	};

	//GET
	exports.getAll = function(req, res, table, column, value) {
		if(!column && !value) {
			table.findAll()
				.then(function(data){
					res.status(200).send(data);
				})
				.catch(function(err){
					res.status(500).send(err.message);
				});
		} else if(column && value) {
			var columnValObj = {}
			columnValObj[column] = value;
			table.findAll({where:columnValObj})
				.then(function(data){
					res.status(200).send(data);
				})
				.catch(function(err){
					res.status(500).send(err.message);
				});
		} else {
			res.status(500).send(err.message);
		}
	}

	//GET
	exports.getRecord = function(req, res, table, id){
		table.findById(id)
			.then(function(data){
			  res.status(200).send(data);
			})
			.catch(function(err){
			  res.status(500).send(err.message);
			});
	};

	//GET
	exports.getElement = function(req, res, table, id, col){
		table.findOne({where: {id:id}, attributes:[col]})
			.then(function(data){
				res.status(200).send(data);
			})
			.catch(function(err){
				res.status(500).send(err.message);
			});
	};

	//check if the id exist in a table
	exports.isIdExist = function(table, id){
		return table.count({where: {id: id}})
			.then(function(count) {
				if (count != 0) {
				 return true;
				}
				return false;
			});
	};

	//PUT
	exports.updateData = function(req, res, table, id, newColumnData){
		table.update(newColumnData, {where:{id:id}})
			.then(function(data){
				res.status(200).send("successfully updated");
			})
			.catch(function(err){
				res.status(500).send(err.message);
			});
	};

	//DELETE
	exports.deleteData = function(req, res, table, id){
		table.findById(id)
			.then(function(id){
				id.destroy();
				res.status(200).send("the id " + id + " is successfully delete.")
			})
			.catch(function(err){
				 res.status(500).send(err.message);
			});
	};