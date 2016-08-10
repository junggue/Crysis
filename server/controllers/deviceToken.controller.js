var db = require('../db/db.js');
var dbHelper = require('../utils/dbHelper.js');

module.exports = {
  'deviceToken': {
    put: function(req, res){
      req.body.deviceToken
      dbHelper.updateData()
    }
  }
}
