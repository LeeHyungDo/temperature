var TemData = require('../models/temdata.js')
  , dht = require('dht-sensor');
    require('date-utils');

//create collection per day
exports.create = function() {
    var current = dht.read(11,18);
    var temdata = {
        yr : new Date().toFormat('YYYY'),
        mt : new Date().toFormat('MM'),
        dy : new Date().toFormat('DD'),
        hr : new Date().toFormat('HH24'),
        mn : new Date().toFormat('MI'),
        se : new Date().toFormat('SS'),
        temperature : current.temperature,
        humidity : current.humidity
    };

    var temdataObj = new TemData(temdata);

    temdataObj.save(function(err, data){
            if(err){
                console.log(err);
            } else {
           //     console.log(data);
            }
    });
};
