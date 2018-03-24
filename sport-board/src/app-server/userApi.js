var express = require("express");
var mongoose = require("mongoose");
var dbUtils = require("./dbUtil");
var api = express.Router();

api.get("/user/:id",function(req,res){
    res.send("Server Ok");
});

api.get("/getusers",function(req,res){
    res.send({name:"vaibhav",email:"vaibhavpfatkal@gmail.com"})
});

api.post("/register",function(req,res){
    
});

module.exports = api;