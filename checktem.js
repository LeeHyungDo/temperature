//requirement : npm install dht-sensor --save
var sensorLib = require('dht-sensor');

//setup snesor
var sensorType = 11; //11 for DHT11, 22 for DHT22 and AM2302
var sensorPin = 18; //the GPIO pin number for sensor signal

//Automatically update sensor value every 2 seconds
setInterval = {function() {
    var readout = sensorLib.read(sensorType, sensorPin);
    console.log('humidity : ' + readout.humidity + '% ' + 'temperature: ' + readout.temperature + 'C');
  }, 2000);


  
