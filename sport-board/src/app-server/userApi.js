var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var dbUtils = require("./dbUtil");
var api = express.Router();
api.use(bodyParser.json());
api.use(bodyParser.urlencoded({extended:true}));

api.get("/user/:id",function(req,res){
    res.send("Server Ok");
});

api.get("/getusers",function(req,res){
    res.send({name:"vaibhav",email:"vaibhavpfatkal@gmail.com"})
});

api.post("/login",function(req,res){
    var postedData = req.body;
    console.log(postedData);
    if(postedData!=undefined){
        console.log(postedData.userName);
        console.log(postedData.password);
        res.set(200);
       res.end("success");
    }else {
        res.set({status:401});
    res.send("failure");
    }
    
});

module.exports = api;