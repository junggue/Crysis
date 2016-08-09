var db = require('../db/db.js');
var dbHelper = require('../utils/dbHelper.js');
var fnHelper = require('../utils/fnHelper.js');
var jwt = require('jsonwebtoken');
var secret = require('../env/config.js')['key'];

module.exports = {
  'login': {
    get: function(req, res) {
      res.end('Received GET login');
    },
    post: function(req, res) {
      var username = req.body.username;
      var table = req.body.table;
      console.log('username in login ', username);
      dbHelper.getAll(table, table.username, username)
        .then(function(employee) {
          console.log(employee)
          if(employee) {
            console.log('if employee ln 17 login ', employee);
            fnHelper.verifyPassword(db.Employee.password, employee.password)
              .then(function(match) {
                if(match) {
                  console.log('inside match ', match);
                  var token = jwt.sign(employee, secret.SECRET, {
                    'username': employee.username,
                    'organizationId': employee.organizationId,
                    'wardenName': employee.wardenName
                  });
                  res.send({
                    token: token,
                    success: true,
                    message: 'Passwords match',
                    employee: employee
                  });
                } else {
                  console.log('in else, not logged in ');
                  res.status(401).json({
                    success: false,
                    message: 'Invalid login info'
                  });
                }
              });
          } else {
            console.log('no employee, in else');
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
