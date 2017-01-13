/* global process */
'use strict'
var Hapi = require('hapi');
var Inert = require('inert');

var server = new Hapi.Server();
var host = process.env.HOST || 'localhost';
var port = process.env.PORT || '3000';

server.connection({
  port: port,
  host: host
});

server.register(Inert, function (err) {
  if (err) throw err;

  server.route({
    method: 'GET',
    path: '/',
    handler: function (req, res) {
      res.file('./index.html');
    }
  });
});


server.start(function (err) {
  if (err) throw err;
  console.log('Server is running on port ' + server.info.port + ' on ' + server.info.uri);
});
