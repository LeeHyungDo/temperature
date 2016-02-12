var dht = require('dht-sensor');

var sensor = {
  read : function() {
    var current = dht.read(11,18);
    console.log('humidity : ' + current.humidity + '% ' + 'temperature: ' + current.temperature + 'C');
    setTimeout(function() {sensor.read();}, 1000);
  }
 }
 
sensor.read();
  
