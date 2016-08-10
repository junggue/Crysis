var db = require('../db/db.js');
var dbHelper = require('../utils/dbHelper.js');

module.exports = {
  'deviceToken': {
    put: function(req, res){
      var currentUser = req.user.username
      var dvcToken = req.body.deviceToken
      dbHelper.updateDataByName(db.Employee, currentUser, )
    }
  }
}
