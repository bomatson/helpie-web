var express = require('express');

const app = express();

const server = app.use(function(request, response) {
  response.end("hello world");
});

var port = process.env.PORT || 3000;
server.listen(port, function() {
  console.log('Server listening on port ' + port + '...');
});
