var dbHelper = require('../utils/dbHelper.js')
var db = require('../db/db.js')
var apple = require('../utils/applepushHelper.js');

module.exports = {
  'alert': {
    put: function(req, res){
      var organizationId = req.user.organizationId;
      dbHelper.updateData(db.Organization, organizationId, { emergencyStatus: true });
      dbHelper.getTokens(db.Employee, 'deviceToken', organizationId)
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
      var organizationId = req.user.organizationId;
      dbHelper.getRecordById(db.Organization, organizationId)
        .then(function(data){
          console.log('data.emergencyStatus', data.emergencyStatus);
          console.log('data from get Alert method', data);
          res.status(200).send({emergencyStatus: data.emergencyStatus});
        })
        .catch(function(err){
          res.send()
        })
    },
    post: function(req, res){
      res.end('received alert post request')
    },
    delete: function(req, res){
      res.end('received alert delete request')
    }

  }
}