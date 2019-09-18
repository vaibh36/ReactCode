var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var postSchema = new Schema({

    firstname:String,
    lastname: String

});

var datains= mongoose.model('datains',postSchema);

module.exports = datains;