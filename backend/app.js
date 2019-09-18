const express = require('express');
const app = express();
var http = require('http');
const usermax = require('./usermax.model');
const bcrpt = require("bcrypt");
const jwt = require('jsonwebtoken');
const checkAuth = require('./middleware/check-auth');


app.use('/',express.static(__dirname + '/'));


var mongoose = require('mongoose');

var  datains = require('./names.model');

//var db = 'mongodb+srv://vaibhav:xY5v3ktMpyAfuAMu@cluster0-zo9rt.mongodb.net/node-angular?retryWrites=true';
var db = 'mongodb://localhost/vaibhav';

mongoose.connect(db)
    .then(()=>{
        console.log('Conneced to database');
    })
    .catch(()=>{
        console.log("Connection failed");
    });
   


app.use((req,res,next) => {

    res.setHeader("Access-Control-Allow-Origin","*");
    

    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,Authorization");

    res.setHeader("Access-Control-Allow-Methods","GET,POST,PUT,PATCH,DELETE,OPTIONS");


  
    next();

});


var bodyParser = require('body-parser');
app.use(bodyParser.json());

var urlencodedParser = bodyParser.urlencoded({extended:false});


app.post('/insert',function(req,res){

    console.log('We are trying to add th names inside the mongoDB:-'+ req.body.firstname);
    var posts = new datains();

    var posts = new datains({

        firstname: req.body.firstname,
        lastname: req.body.lastname


    });

       console.log(posts); 
    posts.save();

/*
    const post = [
        {

            firstname:'Vaibhav',
            lastname:'Gera'
        }
    ]
*/

/*
    res.status(200).json({
        message:'Posts recevied',
        posts:req.body
    });

    */

 //  res.render('The name you entered has been added');
/*
 posts.save(function(err,data){
     if(err){
         console.log("There is an error")
         res.send(JSON.stringify("Error saving the number"))

     }else{
        console.log(data)
        res.send(JSON.stringify("Success"));
     }
 })
 */

 res.send(JSON.stringify('the name you provided has been saved'));
})

app.post("/signup",(req,res,next) =>{

    console.log("Inside the sign up")
    bcrpt.hash(req.body.password, 10)
    .then(hash=>{

        const user = new usermax({
            email: req.body.email,
            password: hash,
            activity: req.body.activity
        });

        user.save()
        .then(result =>{
            res.status(201).json({
                message:'User Created',
                result:result
            })
        })
        .catch(err=>{
            res.status(500).json({
                error:err
            });
        })

    })


   
})

app.post("/login",(req,res,next)=>{
    let fetchedUser;
    usermax.findOne({email:req.body.email}).
    then(user=>{
        if(!user){
            return res.status(401).json({
                message:'Authentication failed'
            })
        }
        fetchedUser = user;
        return bcrpt.compare(req.body.password, user.password)
    })
    .then(result=>{
        if(!result){
            return res.status(401).json({
                message:'Authentication failed'
            })
            
        }

        const token = jwt.sign({email:fetchedUser.email, userId:fetchedUser._id},'secret_this_should_be_longer',{expiresIn:"1h"});
        res.status(200).json({
            token:token,
            expiresIn:3600
        })
    })
    .catch(err=>{
        message:'Auth failed'
    })
})

app.get('/getactivity/getUserActivities/:email',function(req,res){

    console.log("Activities of user to be searched is:-"+req.params.email)
    usermax.findOne({email:req.params.email},function(err,details){

        if(err){
            res.send("There is some error");
        }
        else{
            res.status(200).json({
            //    message:"PFA all the activities that have been found against the user.",
                activity:details.activity,
               
            })
        }
    })
}) 
 
app.post("/addnewactivity",(req,res,next)=>{

console.log("We are inside this microservice to add activity:-"+req.body.activity+" for the user:-"+req.body.email);

    usermax.findOneAndUpdate({'email':req.body.email},{$push:{activity: req.body.activity}},function(err,user){

        if(err){
            console.log("There is some error which has occured:-"+err)
        }
    
     if(user){
         console.log("User has been found");

     }
           

    }


    )


   
     
})

module.exports = app;




