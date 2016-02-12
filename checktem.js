//requirement : npm install dht-sensor --save
var dht = require('dht-sensor');

var sensor = {
  read : function() {
    //set RaspberryPI 2 GPIO(11:dht11, 18:BCM GPIO)
    var current = dht.read(11,18);
    console.log('humidity : ' + current.humidity + '% ' + 'temperature: ' + current.temperature + 'C');
    setTimeout(function() {sensor.read();}, 1000);
  }
 }
 
sensor.read();
  
