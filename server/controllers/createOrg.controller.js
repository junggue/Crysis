var db = require('../db/db.js');
var dbHelper = require('../utils/dbHelper.js');

module.exports = {
  'createOrg': {
    get: function(req, res) {
      res.end('Received GET createOrg');
    },
    post: function(req, res) {
      var newOrg = {
        username: req.body.username,
        password: req.body.password
      };
      dbHelper.getRecord(db.Organization, 'username', newOrg.username)
        .then(function(org) {
          if(org) {
            res.status(401).send({
              message: 'Organization already exists'
            });
          } else {
            dbHelper.insertData(db.Organization, newOrg)
              .then(function(entry) {
                res.send({
                  message: 'New organization created',
                  organization: entry
                });
              })
              .catch(function(err) {
                res.send(err);
              });
          }
        });
    },
    put: function(req, res) {
      res.end('Received PUT createOrg');
    },
    delete: function(req, res) {
      res.end('Received DELETE createOrg');
    }
  }
}
