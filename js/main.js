require(["backbone.marionette"], function(Marionette) {
  "use strict";
  var App = new Marionette.Application();
  
  App.on("initialize:after", function() {
    console.log("Marionette ready!", Marionette); 
  });
  
  App.start();
});