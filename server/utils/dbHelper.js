var db = require('../db/db.js');

exports.insertData = function(table, newData){
		return table.create(newData);
};

exports.getAll = function(table, column, value) {
	if(!column && !value) {
		return (table.findAll());
	} else {
		var columnValObj = {};
		columnValObj[column] = value;
		return (table.findAll({where:columnValObj}));
	}
}

exports.getRecord = function(table, column, value){
	var columnValObj = {};
	columnValObj[column] = value;
	return (table.findOne({where: columnValObj}));
};

exports.getRecordById = function(table, id){
	return (table.findById(id));
};

exports.getElement = function(table, id, col){
	return (table.findOne({where: {id:id}, attributes:[col]}));
};

exports.updateData = function(table, id, newColumnData){
	return table.update(newColumnData, {where:{id:id}});
};

exports.deleteData = function(table, id){
	return (table.findById(id));
};

exports.isIdExist = function(table, id){
	return table.count({where: {id: id}})
		.then(function(count) {
			if (count != 0) {
				return true;
			}
			return false;
		});
};
