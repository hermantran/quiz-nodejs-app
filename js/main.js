require.config({
  "paths": {
    backbone: "../jam/backbone/backbone",
    "backbone.babysitter": "../jam/backbone.babysitter/lib/amd/backbone.babysitter",
    "backbone.marionette": "../jam/backbone.marionette/lib/core/amd/backbone.marionette",
    "backbone.wreqr": "../jam/backbone.wreqr/lib/amd/backbone.wreqr",
    jquery: "../jam/jquery/dist/jquery",
    underscore: "../jam/underscore/underscore"
  },
  "shim": {
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
  }
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