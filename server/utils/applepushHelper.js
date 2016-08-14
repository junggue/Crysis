var apn = require('apn');
var fs = require('fs');

// var cert = fs.readFileSync('server/keys/cert.pem');
// var key = fs.readFileSync('server/keys/key.pem');

var cert = fs.readFileSync('server/keys/dummy.cert.pem');
var key = fs.readFileSync('server/keys/dummy.key.pem');

var options = {
  "production": false,
  "cert": cert,
  "key": key
}

module.exports = {
  "connection": new apn.Connection(options),
  "createDevice": function(token){
    return new apn.Device(token);
  },
  "createNote": function(){
    return new apn.Notification();
  }
}
