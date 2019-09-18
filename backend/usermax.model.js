var mongoose = require('mongoose');
const uniqueValidator = require("mongoose-unique-validator");


var Schema = mongoose.Schema;

var postSchema = new Schema({

    email:{type:String,required:true,unique:true},
    password: {type:String,required:true},
    activity:[{type:String,required:true}]

});

postSchema.plugin(uniqueValidator)

var usermax= mongoose.model('usermax',postSchema);

module.exports = usermax;