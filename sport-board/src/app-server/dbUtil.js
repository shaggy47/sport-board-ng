var mongoose = require("mongoose");
var config = require("../../deployment.config.json");
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


