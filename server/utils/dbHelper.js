var db = require('../db.js');

  //POST
  //inserting data into a table
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
  exports.getAll = function(req, res, table, fields, value) {
    //get all records
    if(!fields && !value) {
      table.findAll()
        .then(function(data){
          res.status(200).send(data);
        })
        .catch(function(err){
          res.status(500).send(err.message);
        });
    }
    //get all records for specific data
    else {
      table.findAll({where:{field:value},
        attributes: fields})
      .then(function(data){
        res.status(200).send(data);
      })
      .catch(function(err){
        res.status(500).send(err.message);
      });
    }
  }

  // get a data of a row (one record)
  exports.getRecordById = function(req, res, table, id){
    table.findById(id)
      .then(function(data){
        res.status(200).send(data);
      })
      .catch(function(err){
        res.status(500).send(err.message);
      });
  };

  // get a attribute of a record
  exports.getColumnById = function(req, res, table, id, col){
    table.findOne({where:{id:id},
      attributes: col})
      .then(function(data){
        res.status(200).send(data);
      })
      .catch(function(err){
        res.status(500).send(err.message);
      })
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
  //update a record
  exports.updateData = function(req, res, table, updatedData ,id){
    table.update(updatedData, {where:{id:id}})
      .then(function(result){
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