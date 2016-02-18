var mongoose = require('mongoose');

var Schema = mongoose.Schema
  , ObjectId = Schema.ObjectId;

//create temperature data model
var TemData = new Schema({
        yr :{type : Number, require: true},
        mt :{type : Number, require: true},
        dy :{type : Number, require: true},
        hr :{type : Number, require: true},
        mn :{type : Number, require: true},
        se :{type : Number, require: true},
        temperature :{type : Number, require: true},
        humidity :{type : Number, require: true}
});

module.exports = mongoose.model('TemData', TemData);
