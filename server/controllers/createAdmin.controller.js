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
      var org = {
        orgName: req.body.orgName,
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
      dbHelper.getRecord(db.Organization, 'orgName', org.orgName)
        .then(function(org) {
          if(org) {
            fnHelper.verifyPassword(org.orgHash, req.body.orgPassword)
              .then(function(match) {
                if(match) {
                  var token = jwt.sign({
                    id: org.id,
                    orgName: org.orgName
                  }, secret.SECRET);
                  res.send({
                    token: token,
                    success: true,
                    message: 'Passwords match',
                    org: org
                  });
                  dbHelper.getRecord(db.Employee, 'username', newAdmin.username)
                    .then(function(admin) {
                      if(admin) {
                        res.status(401).send({
                          message: 'Administrator already exists'
                        });
                      } else {
                        dbHelper.insertData(db.Employee, newAdmin)
                          .then(function(entry) {
                            res.send({
                              message: 'Administrator entered into system',
                              admin: entry
                            });
                          })
                          .catch(function(err) {
                            res.send(err);
                          });
                      }
                    });
                } else {
                  res.status(401).json({
                    success: false,
                    message: 'Invalid organization login info'
                  });
                }
              })
          } else {
            res.status(401).json({
              success: false,
              message: 'Organization does not exist'
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
