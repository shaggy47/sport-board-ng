var mongoose = require("mongoose");
var config = require("../../deployment.config.json");

var userSchema = mongoose.Schema({
    firstName:{type:String, required:true},
    lastName: {type:String, required:true},
    emailAddress:{type:String,required:true},
    userName:{type:String,required:false,unique:true},
    password:{type:String, required:false}
});

module.exports.Init = function(){
    var connectionString = "mongodb://"+config.dbUserName+":"+config.dbPassword+"@"+config.dbHost+":"+config.dbPort+
    "/"+config.dbName;
    console.log(connectionString);
    mongoose.connect(connectionString,function(err){
        if(err)
            console.log(err);
        console.log("db connected");
    });
};


