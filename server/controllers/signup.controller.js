var db = require('../db/db.js');
var dbHelper = require('../utils/dbHelper.js');
var jwt = require('jsonwebtoken');
var secret = require('../env/config.js');

module.exports = {
  'signup': {
    get: function(req, res) {
      res.end('Received GET signup');
    },
    post: function(req, res) {
      var newEmployee = {
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        isWarden: req.body.isWarden,
        wardenName: req.body.wardenName,
        isAdmin: req.body.isAdmin,
        password: req.body.password
      };
      dbHelper.findByUsername(newEmployee.username)
        .then(function(employee) {
          if(employee) {
            res.status(401).json({
              message: 'Username already exists'
            });
          } else {
            dbHelper.insertData(req, res, table, newEmployee)
              .then(function(employee) {
                var token = jwt.sign(employee, secret.SECRET), {
                  username: username,
                  organizationId: organizationId,
                  wardenName: wardenName
                };
                res.json({
                  token: token,
                  message: 'Employee entered into system',
                  employee: employee
                });
              })
              .catch(function(err) {
                res.send(err);
              });
          }
        });
    },
    put: function(req, res) {
      res.edn('Received PUT signup');
    },
    delete: function(req, res) {
      res.edn('Received DELETE signup');
    }
  }
}
