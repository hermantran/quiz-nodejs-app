
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');

var app = express(),
    server = require('http').createServer(app),
    io = require('socket.io').listen(server);

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
  app.locals.pretty = true;
}

server.listen(80);

app.get('/', routes.index);
app.get('/users', user.list);

io.sockets.on('connection', function(socket) {
  var count = { count: io.sockets.clients().length };
  io.sockets.emit('count', count);
  
  socket.emit('get chat', { msg: 'Welcome to the chat room!' });
  
  socket.on('set chat', function(msg) {
    var obj = { msg: msg };
    io.sockets.emit('get chat', obj);
  });
  
  socket.on('disconnect', function() {
    var count = { count: io.sockets.clients().length - 1 };
    io.sockets.emit('count', count);
  });
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
