var http = require('http')
  , mongoose = require('mongoose')
  , temdata = require('./controllers/temdata.js');

//Mongo DB
mongoose.connect('mongodb://127.0.0.1/temperatureDB');
mongoose.connection.on('open', function() {
        console.log('Connected to Mongoose');
});


//Automatically update sensor value every 2 seconds
var sensor ={
    read : function() {
        temdata.create();
        setTimeout(function() { sensor.read();}, 3000);
  }
}

sensor.read();  
