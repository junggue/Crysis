var db = require('../db/db.js');
var dbHelper = require('../utils/dbHelper.js');
var fnHelper = require('../utils/fnHelper.js');
var jwt = require('jsonwebtoken');
var secret = require('../env/config.js')['key'];

module.exports = {
  'adminLogin': {
    get: function(req, res) {
      res.end('Received GET adminLogin');
    },
    post: function(req, res) {
      var org = {
        orgName: req.body.orgName,
        orgPassword: req.body.orgPassword
      }
      var admin = {
        username: req.body.username,
        password: req.body.password
      };
      dbHelper.getRecord(db.Organization, 'orgName', org.orgName)
        .then(function(org) {
          if(org) {
            fnHelper.verifyPassword(org.orgHash, req.body.orgPassword)
              .then(function(match) {
                if(match) {
                  dbHelper.getRecord(db.Employee, 'username', admin.username)
                    .then(function(admin) {
                      if(admin) {
                        fnHelper.verifyPassword(admin.hash, req.body.password)
                        .then(function(match) {
                          if(match) {
                            var token = jwt.sign({
                              id: org.id
                              orgName: org.orgName,
                            }, secret.SECRET);
                            res.send({
                              token: token,
                              success: true,
                              message: 'Passwords match',
                              org: org,
                              organizationId: org.id
                            });
                          } else {
                            res.status(401).json({
                              success: false,
                              message: 'Invalid administrator login info'
                            });
                          }
                        });
                      } else {
                        res.status(401).json({
                          success: false,
                          message: 'Administrator does not exist'
                        })
                      }
                    });
                } else {
                  res.status(401).json({
                    success: false,
                    message: 'Invalid organization login info'
                  });
                }
              });
          } else {
            res.status(401).json({
              success: false,
              message: 'Organization does not exist'
            });
          }
        });
    },
    put: function(req, res) {
      res.end('Received PUT adminLogin');
    },
    delete: function(req, res) {
      res.end('Received DELETE adminLogin');
    }
  }
}
