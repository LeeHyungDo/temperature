//requirement : npm install dht-sensor --save
//            : npm install blynk-library
var blynkLib  = require('blynk-library');
var sensorLib = require('dht-sensor');

//set AUTH key from Blynk
var AUTH ='';

//setup Blynk
var blynk = new blynkLib.Blynk(AUTH);

//setup snesor
var sensorType = 11; //11 for DHT11, 22 for DHT22 and AM2302
var sensorPin = 18; //the GPIO pin number for sensor signal

//Automatically update sensor value every 2 seconds
setInterval = {function() {
    var readout = sensorLib.read(sensorType, sensorPin);
    blynk.virtualWrite(3, readout.temperature.toFixed(1));
    blynk.virtualWrite(4, readout.humidity.toFixed(1));
    
    console.log('humidity : ' + readout.humidity + '% ' + 'temperature: ' + readout.temperature + 'C');
  }, 2000);


  
