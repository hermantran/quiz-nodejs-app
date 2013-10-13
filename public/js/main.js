require.config({
  paths: {
    backbone: "libs/backbone/backbone",
    "backbone.babysitter": "libs/backbone.babysitter/lib/amd/backbone.babysitter",
    "backbone.marionette": "libs/backbone.marionette/lib/core/amd/backbone.marionette",
    "backbone.wreqr": "libs/backbone.wreqr/lib/amd/backbone.wreqr",
    jquery: "libs/jquery/dist/jquery",
    underscore: "libs/underscore/underscore"
  },
  
  shim: {
    "backbone": {
      "deps": [
        "underscore",
        "jquery"
      ],
      "exports": "Backbone"
    },
    "underscore": {
      "exports": "_"
    }
  },
  
   urlArgs: "bust=" + (new Date()).getTime()
});

require([
  "backbone.marionette"
], function(Marionette) {
  "use strict";
  var App = new Marionette.Application();
  
  App.on("initialize:after", function() {
    console.log("Marionette ready!", Marionette);
  });
  
  App.start(); 
});