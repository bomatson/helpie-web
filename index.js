var express = require('express');
var models = require('./models');
var getRawBody = require('raw-body');
var wit = require('node-wit');

var ACCESS_TOKEN = 'EEBIDF2KTIIDA574WDZP7NUYPSVLG6IG';

const app = express();

const server = app
  .post('/checkins', function(request, response) {
    getRawBody(request, {
    }, function (err, string) {
      if (err) {
        response.end('ERROR!');
      }
      response.send('Upload length = ' + string.length);

      var stream = fs.createReadStream('/Users/rudy/sample.wav');
      wit.captureSpeechIntent(ACCESS_TOKEN, stream, "audio/wav", function (err, res) {
        response.send("Response from Wit for audio stream: ");
        if (err) response.end("Error: ", err);
        response.end(JSON.stringify(res, null, " "));
      });
    })
  })
  .get('/checkins', function(request,response) {
    models.CheckIn.findAll().then(function(checkIns) {
      response.end("Number of CheckIns = " + checkIns.length);
    });
  });

var port = process.env.PORT || 3000;
server.listen(port, function() {
  console.log('Server listening on port ' + port + '...');
});
