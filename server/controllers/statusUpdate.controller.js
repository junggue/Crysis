var dbHelper = require('../utils/dbHelper.js')
var db = require('../db/db.js')
var apple = require('../utils/applepushHelper.js');

module.exports = {
  'statusUpdate': {
    put: function(req, res){
      var orgId = req.user.orgId;
      var userStatus = req.body.userStatus;
      var userWarden = req.user.wardenName;
      dbHelper.updateDataByName(db.Employee, req.user.username, {status: userStatus})
        .then(function(){
          return dbHelper.getTokensByWarden(db.Employee, 'deviceToken', userWarden);
        })
        .then(function(data){
          var justDeviceTokenArr = data.filter(function(element){
            return element['deviceToken'] !== null;
          }).map(function(entry){
            return apple.createDevice(entry['deviceToken']);
          })
          console.log(justDeviceTokenArr, "just token array")
          var note = apple.createNote();
          note.expiry = Math.floor(Date.now() / 1000) + 3600;
          // note.badge = 1;
          // note.sound = "ping.aiff";
          // note.alert = "EMERGENCY ALERT";
          note.payload = { "userStatus": userStatus, "userStatusUpdate": true, "silent": true};
          note['content-available'] = 1;
          apple.connection.pushNotification(note, justDeviceTokenArr);

          res.status(200).send('push notifications sent successfully');
        })
        .catch(function(err){
          console.log(err);
          res.status(400).send('not okay');
        })
    },
    get: function(req, res){
      var userWarden = req.user.wardenName;
      dbHelper.getAll(db.Employee, "wardenName", userWarden)
        .then(function(userStatusData){
          console.log("userStatusData from db query for employee stats", userStatusData);
          res.status(200).send(userStatusData);
        })
        .catch(function(err){
          console.log('there was an error');
          res.status(500).send("there was an error with your request for user status");
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
