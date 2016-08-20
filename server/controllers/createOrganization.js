var db = require('../db/db.js');
var dbHelper = require('../utils/dbHelper.js');

module.exports = {
  'createOrganization': {
    get: function(req, res){
      res.end('Received GET createOrganization');
    },
    post: function(req, res){
      var newOrg = {
				username: req.body.username,
				password: req.body.password
			}
			dbHelper.insertData(db.Organization, newOrg)
				.then(function(data){
					res.status(200).send("successfully posted");
				})
				.catch(function(err){
					res.status(500).send(err.message);
				});
    },
    put: function(req, res){
      res.end('Received PUT createOrganization');
    },
    delete: function(req, res){
      res.end('Received DELETE createOrganization');
    }
  }
}
