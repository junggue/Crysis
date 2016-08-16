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
        // organizationId: req.body.organizationId
      };
      fnHelper.verifyPassword(org.orgHash, org.orgPassword)
        .then(function(match) {
          if(match) {
            var token = jwt.sign({
              organizationId: org.id,
              orgName: org.orgName
            }, secret.SECRET);
            res.send({
              token: token,
              success: true,
              message: 'Passwords match',
              org: org,
              organizationId: org.id
            });
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
          } else {
            res.status(401).json({
              success: false,
              message: 'Invalid organization login info'
            });
          }
        })
    },
    put: function(req, res) {
      res.end('Received PUT createAdmin');
    },
    delete: function(req, res) {
      res.end('Received DELETE createAdmin');
    }
  }
}
