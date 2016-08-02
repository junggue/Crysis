var db = require('../db.js');
var dbHelper = require('../utils/dbHelper.js');

module.exports = {
  'user': {
    get: function(req, res){

      dbHelper.getAll(req, res, db.Employee)
      db.Employee.findAll()
        .then(function(data){
          res.status(200).send(data);
        })
        .catch(function(err){
          res.status(200).send(err.message);
        })
    },
    post: function(req, res){

      var newUser = {
          username   : req.body.username,
          email      : req.body.email,
          name       : req.body.name,
          role       : req.body.role,
          warden     : req.body.warden,
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

  'user/:id': {
    get: function(req, res){

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

  'organization': {
    get: function(req, res){

    },
    post: function(req, res){

    },
    put: function(req, res){

    },
    delete: function(req, res){
      
    }
  },

  'organization/:id': {
    get: function(req, res){

    },
    post: function(req, res){

    },
    put: function(req, res){

    },
    delete: function(req, res){
      
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