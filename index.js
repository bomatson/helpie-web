var express = require('express');
var models = require('./models');
var getRawBody = require('raw-body');

const app = express();

const server = app
  .post('/checkins', function(request, response) {
    getRawBody(request, {
    }, function (err, string) {
      if (err) {
        console.log("ERROR: " + err);
        response.end('ERROR!');
      }
      console.log(string);
      response.end('Upload length = ' + string.length);
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
