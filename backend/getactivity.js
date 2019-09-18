const getactivity = require('express').Router();
const express = require('express');
const app = express();
var db = 'mongodb://localhost/vaibhav';
var mongoose = require('mongoose');

mongoose.connect(db)
    .then(()=>{
        console.log('Conneced to database');
    })
    .catch(()=>{
        console.log("Connection failed");
    });
   

app.use((req,res,next) => {

    res.setHeader("Access-Control-Allow-Origin","*");

    res.setHeader('Access-Control-Allow-Headers: *');

 //   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,Authorization");

    res.setHeader("Access-Control-Allow-Methods","GET,POST,PUT,PATCH,DELETE,OPTIONS");


  
    next();

});


getactivity.get('/getUserActivities/:email', (req, res) => {
  
    console.log("Activities of user to be searched is:-"+req.params.email)
    usermax.findOne({email:req.params.email},function(err,details){

        if(err){
            res.send("There is some error");
        }
        else{
            res.status(200).json({
                message:"PFA all the activities that have been found against the user.",
                activity:details.activity,
               
            })
        }
    })


});

module.exports = getactivity;