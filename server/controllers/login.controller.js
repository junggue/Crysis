var db = require('..db//db.js');
var dbHelper = require('../utils/dbHelper.js');
var jwt = require('jsonwebtoken');
var secret = require('../env/config.js');

module.exports = {
  '/login': {
    get: function(req, res) {
      res.end('Received GET login');
    },
    post: fuction(req, res) {
      var username = req.body.username;
      dbHelper.findByUsername(username)
        .then(function(user) {
          if(employee) {
            dbHelper.verifyPassword(employee.password, password)
              .then(function(match) {
                if(match) {
                  var token = jwt.sign(employee, secret.SECRET, {
                    expiresIn: 1440 * 90,
                    username: username,
                    organizationId: organizationId,
                    wardenName: wardenName
                  });
                  res.send({
                    token: token,
                    success: true,
                    message: 'Passwords match',
                    employee: employee
                  });
                } else {
                  res.status(401).json({
                    success: false,
                    message: 'Invalid password'
                  });
                }
              });
          } else {
            res.status(401).json({
              success: false,
              message: 'Employee does not exist'
            });
          }
        });
    },
    put: function(req, res) {
      res.end('Received PUT login');
    },
    delete: function(req, res) {
      res.end('Received DELETE login');
    }
  }
}
