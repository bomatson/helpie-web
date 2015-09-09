var express = require('express');
var models = require('./models');
var bodyParser = require('body-parser');

const app = express();

const server = app
  .use(bodyParser.raw({}))
  .post('/checkins', function(request, response) {
    console.log(request.body.length);
    response.end("Done");
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
