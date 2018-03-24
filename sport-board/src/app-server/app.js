const express = require("express");
const path = require("path");
const serverConfig = require("../../deployment.config.json");
const portNumber = serverConfig.serverPort;
var userApi = require("./userApi");
var dbUtil = require("./userApi");
var app = express();

app.use(express.static(path.resolve(__dirname,"../../dist")));
app.use("/api",userApi);

app.listen(portNumber, function(err){
    if(err)
        console.log("Server start failed");
    console.log("server started");
});