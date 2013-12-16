require.config({
  paths: {
    'backbone': 'libs/backbone/backbone',
    'backbone.babysitter': 'libs/backbone.babysitter/lib/amd/backbone.babysitter',
    'backbone.marionette': 'libs/backbone.marionette/lib/core/amd/backbone.marionette',
    'backbone.wreqr': 'libs/backbone.wreqr/lib/amd/backbone.wreqr',
    'jquery': 'libs/jquery/dist/jquery',
    'underscore': 'libs/underscore/underscore',
    'socket.io': 'http://localhost:80/socket.io/socket.io.js'
  },
  
  shim: {
    'backbone': {
      'deps': [
        'underscore',
        'jquery'
      ],
      'exports': 'Backbone'
    },
    
    'underscore': {
      'exports': '_'
    },
    
    'socket.io': {
      exports: 'io' 
    }
  },
  
   urlArgs: 'bust=' + (new Date()).getTime()
});

require([
  'backbone.marionette',
  'socket.io'
], function(Marionette, io) {
  'use strict';
  var App = new Marionette.Application();
  
  App.on('initialize:after', function() {
    console.log('Marionette ready!', Marionette);
  });
  
  App.start(); 
  
  var socket = io.connect('http://localhost:80');
  var $chatRoom = $('.chatroom'),
      $chatForm = $('form[name="chat-form"]'),
      $msg = $chatForm.find('input[name="msg"]'),
      $clientCount = $('.client-count');
  
  socket.on('get chat', function(data) {
    console.log(data);
    $chatRoom.append('<p>' + data.msg + '</p>');
    $msg.val('');
  });
  
  socket.on('count', function(data) {
    console.log(data);
    $clientCount.html(data.count);
  });
  
  $chatForm.on('submit', function(e) {
    e.preventDefault();
    socket.emit('set chat', $msg.val());
  });
});