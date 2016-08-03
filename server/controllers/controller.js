var db = require('../db.js');
var dbHelper = require('../utils/dbHelper.js');

module.exports = {
  'user': {
    get: function(req, res){
      dbHelper.getAll(req, res, db.Employee);
    },
    post: function(req, res){

      var newUser = {
          username   : req.body.username,
          email      : req.body.email,
          name       : req.body.name,
          role       : req.body.role,
          warden     : req.body.warden,
          wardenName : req.body.wardenName,
          status     : req.body.status,
          admin      : req.body.admin,
          password   : req.body.password,
        }

      dbHelper.insertData(req, res, db.Employee, newUser);
    },
    put: function(req, res){
      
    },
    delete: function(req, res){
      
    }
  },
  //entire record
  'user/:id': {
    get: function(req, res){
      var id = req.params.id;
      dbHelper.getRecordById(req, res, db.Employee, id);
    },
    post: function(req, res){

    },
    put: function(req, res){

    },
    delete: function(req, res){
      var id = req.params.id;
      dbHelper.deleteData(req, res, db.Employee, id);
    }
  },
  //specific field for one record
  'user/:id/:field' : {
    get: function(req, res){
      var id = req.params.id;
      var field = req.params.field;
      //get a record
      if(!req.params.field){
        dbHelper.getRecordById(req, res, db.Employee, id);
      }
      //get a attribute of a record
      dbHelper.getColumnById(req, res, db.Employee, id, field);

    },
    post: function(req, res){
      
    },
    put: function(req, res){
      var id = req.params.id;
      var field = req.params.field;

      var newData = req.body.wardenName;

      db.Employee.find({where:{id:id}})
        .then(function(record){
          record.updateAttributes({wardenName:newData});
          res.status(200).send("warden successfully updated");
      })
      .catch(function(err){
        res.status(500).send(err.message);
      });
    },
    delete: function(req, res){
      
    }
  },

  'organization': {
    get: function(req, res){
      dbHelper.getAll(req, res, db.Organization);
    },
    post: function(req, res){
      var newOrg = {
          username       : req.body.username,
          safezone       : req.body.email,
          emergencyStatus: req.body.name,
          orgSalt        : req.body.role,
          orgHash        : req.body.warden,
          password       : req.body.status
        }
      dbHelper.insertData(req, res, db.Organization, newOrg);
    },
    put: function(req, res){
      var id = req.params.id;
      var field = req.params.field;

      var newData = req.body.wardenName;

      db.Employee.find({where:{id:id}})
        .then(function(record){
          record.updateAttributes({wardenName:newData});
          res.status(200).send("warden successfully updated");
      })
      .catch(function(err){
        res.status(500).send(err.message);
      });
    },
    delete: function(req, res){
      
    }
  },

  'organization': {
    get: function(req, res){
      dbHelper.getAll(req, res, db.Organization);
    },
    post: function(req, res){
      var newOrg = {
          username       : req.body.username,
          safezone       : req.body.email,
          emergencyStatus: req.body.name,
          orgSalt        : req.body.role,
          orgHash        : req.body.warden,
          password       : req.body.status
        }
      dbHelper.insertData(req, res, db.Organization, newOrg);
    },
    put: function(req, res){
      var id = req.params.id;

      var newData = req.body.wardenName;

      db.Employee.find({where:{id:id}})
        .then(function(record){
          record.updateAttributes({wardenName:newData});
          res.status(200).send("warden successfully updated");
      })
      .catch(function(err){
        res.status(500).send(err.message);
      });
    },
    delete: function(req, res){
      
    }
  },

  'organization': {
    get: function(req, res){
      var id = req.params.id;
      dbHelper.getRecordById(req, res, db.Organization, id);
    },
    post: function(req, res){

    },
    put: function(req, res){

    },
    delete: function(req, res){
      var id = req.params.id;
      dbHelper.deleteData(req, res, db.Organization, id);
    }
  },

  'emergency/': {
    get: function(req, res){

    },
    post: function(req, res){

    },
    put: function(req, res){

    },
    delete: function(req, res){
      
    }
  },

  'emergency/:id': {
    get: function(req, res){

    },
    post: function(req, res){

    },
    put: function(req, res){

    },
    delete: function(req, res){
      
    }
  }
}