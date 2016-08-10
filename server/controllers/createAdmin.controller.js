var db = require('../db/db.js');
var dbHelper = require('../utils/dbHelper.js');
var fnHelper = require('../utils/fnHelper.js');
var jwt = require('jsonwebtoken');
var secret = require('../env/config.js')['key'];

module.exports = {
  'createAdmin': {
    get: function(req, res) {
      res.end('Received GET createAdmin');
    },
    post: function(req, res) {
      var orgInfo = {
        orgUsername: req.body.orgUsername,
        orgPassword: req.body.orgPassword
      };
      var newAdmin = {
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        isWarden: req.body.isWarden,
        wardenName: req.body.wardenName,
        isAdmin: true,
        password: req.body.password
      };
      dbHelper.getRecord(db.Organization, 'username', orgInfo.username)
        .then(function(org) {
          if(!org) {
            res.status(401).send({
              message: 'Organization does not exist'
            });
          } else {
            fnHelper.verifyPassword(org.hash, req.body.orgPassword)
              .then(function(match) {
                if(!match) {
                  res.status(401).json({
                    success: false,
                    message: 'Invalid login info'
                  });
                } else {
                  dbHelper.getRecord(db.Employee, 'username', newAdmin.username)
                  .then(function(admin) {
                    if(admin) {
                      res.status(401).send({
                        message: 'Username already exists'
                      });
                    } else {
                      dbHelper.insertData(db.Employee, newAdmin)
                      .then(function(entry) {
                        var token = jwt.sign({
                          id: org.id,
                          username: org.username
                        }, secret.SECRET);
                        res.send({
                          message: 'New administrator created',
                          admin: entry
                        });
                      })
                      .catch(function(err) {
                        res.send(err);
                      });
                    }
                  });
                }
              })
          }
        });
    },
    put: function(req, res) {
      res.end('Received PUT createAdmin');
    },
    delete: function(req, res) {
      res.end('Received DELETE createAdmin');
    }
  }
}
