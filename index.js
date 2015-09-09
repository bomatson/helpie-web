var express = require('express');
var Sequelize = require('sequelize');

const app = express();

const server = app.use(function(request, response) {
  response.end("hello world");
});

var port = process.env.PORT || 3000;
server.listen(port, function() {
  console.log('Server listening on port ' + port + '...');
});

var sequelize = new Sequelize(process.env.DATABASE_URL || 'postgres://postgres@localhost/helpie-web');

// name
// location
// created_at
// audio

var CheckIn = sequelize.define('check_in', {
  name: {
    type: Sequelize.STRING
  },
  location: {
    type: Sequelize.STRING
  },
  createdAt: {
    type: Sequelize.DATE,
    field: 'created_at'
  },
  audio: {
    type: Sequelize.BLOB('long')
  }

}, {
  freezeTableName: true // Model tableName will be the same as the model name
});

//app.get('/db', function (request, response) {
//  pg.connect(process.env.DATABASE_URL, function(err, client, done) {
//    client.query('SELECT * FROM test_table', function(err, result) {
//      done();
//      if (err)
//      { console.error(err); response.send("Error " + err); }
//      else
//      { response.render('pages/db', {results: result.rows} ); }
//    });
//  });
//})