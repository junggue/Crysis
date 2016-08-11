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
      dbHelper.getRecord(db.Employee, 'username', username)
        .then(function(employee) {
          if(employee) {
            fnHelper.verifyPassword(employee.hash, req.body.password)
              .then(function(match) {
                if(match) {
                  //creat token
                  var currentUser = req.body.username;
                  var dvcToken = req.body.deviceToken;
                  dbHelper.updateDataByName(db.Employee, currentUser, {deviceToken: dvcToken}).then(function(){
                    var token = jwt.sign({
                      id: employee.id,
                      username: employee.username,
                      orgId: employee.organizationId,
                      warden: employee.wardenName
                    }, secret.SECRET);
                    //respond with token
                    res.send({
                      token: token,
                      success: true,
                      message: 'Passwords match',
                      employee: employee
                    });
                  })
                } else {
                  res.status(401).json({
                    success: false,
                    message: 'Invalid login info'
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
