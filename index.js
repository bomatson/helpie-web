var express = require('express');

const app = express();

const server = app.use(function(request, response) {
  response.end("hello world");
});

server.listen(3000, function() {
  console.log('Server listening...');
});
