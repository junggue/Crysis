var db = require('../db/db.js');
var dbHelper = require('../utils/dbHelper.js');

module.exports = {
  'createEmployee': {
    get: function(req, res) {
      res.end('Received GET createEmployee');
    },
    post: function(req, res) {
      var newEmployee = {
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        isWarden: req.body.isWarden,
        wardenName: req.body.wardenName,
        isAdmin: req.body.isAdmin,
        password: req.body.password,
        organizationId: req.body.organizationId
      };
      dbHelper.getRecord(db.Employee, 'username', newEmployee.username)
        .then(function(employee) {
          if(employee) {
            res.status(401).send({
              message: 'Username already exists'
            });
          } else {
            dbHelper.insertData(db.Employee, newEmployee)
              .then(function(entry) {
                res.send({
                  message: 'Employee entered into system',
                  employee: entry
                });
              })
              .catch(function(err) {
                res.send(err);
              });
          }
        });
    },
    put: function(req, res) {
      res.end('Received PUT createEmployee');
    },
    delete: function(req, res) {
      res.end('Received DELETE createEmployee');
    }
  }
}
