/* global process, __dirname */
'use strict'
var Hapi = require('hapi');
var Inert = require('inert');

var server = new Hapi.Server({
  connections: {
    routes: {
      files: {
        relativeTo: __dirname + '/client'
      }
    }
  }
});
var host = process.env.HOST || 'localhost';
var port = process.env.PORT || '3000';

server.connection({
  port: port,
  host: host
});

server.register(Inert, function () {
  server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
      directory: {
        path: '.',
        redirectToSlash: true,
        index: true
      }
    }
  })
});

server.start(function (err) {
  if (err) throw err;
  console.log('Server is running on port ' + server.info.port + ' on ' + server.info.uri);
});
