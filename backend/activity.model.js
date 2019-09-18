var mongoose = require('mongoose');



var Schema = mongoose.Schema;

var activitySchema = new Schema({

   activityname:{type:String,required:true},
  
    caloriesBurnt:{type:Number,required:true}
});



var activities= mongoose.model('activities',postSchema);

module.exports = activities;