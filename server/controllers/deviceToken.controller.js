var db = require('../db/db.js');
var dbHelper = require('../utils/dbHelper.js');

module.exports = {
  'deviceToken': {
    put: function(req, res){
      var currentUser = req.user.username;
      var dvcToken = req.body.deviceToken;
      console.log("i'm about to write to the data base this item: ", dvcToken)
      dbHelper.updateDataByName(db.Employee, currentUser, {deviceToken: dvcToken});
    },
    get: function(req, res){
      res.end('received deviceToken get request')
    },
    post: function(req, res){
      res.end('received deviceToken post request')
    },
    delete: function(req, res){
      res.end('received deviceToken delete request')
    }

  }
}
