var dbHelper = require('../utils/dbHelper.js')
var db = require('../db/db.js')
var apple = require('../utils/applepushHelper.js');

module.exports = {
  'alert': {
    put: function(req, res){
      var orgId = req.user.orgId;
      dbHelper.updateData(db.Organization, orgId, { emergencyStatus: true });
      dbHelper.getTokens(db.Employee, 'deviceToken', orgId)
      .then(function(data){
        var justDeviceTokenArr = data.filter(function(element){
          return element['deviceToken'] !== null;
        }).map(function(entry){
          return apple.createDevice(entry['deviceToken']);
        })
        console.log(justDeviceTokenArr, "just token array")
        
        var note = apple.createNote();
        note.expiry = Math.floor(Date.now() / 1000) + 3600;
        note.badge = 1;
        note.sound = "ping.aiff";
        note.alert = "EMERGENCY ALERT";
        note.payload = { "EMERGENCY": "There is a fire in the building please evacuate immediately"};
        apple.connection.pushNotification(note, justDeviceTokenArr);

        res.status(200).send('push notifications sent successfully');
      })
      .catch(function(err){
        console.log(err);
        res.status(400).send('not okay');
      })
    },
    get: function(req, res){
      res.end('received alert get request')
    },
    post: function(req, res){
      res.end('received alert post request')
    },
    delete: function(req, res){
      res.end('received alert delete request')
    }

  }
}
