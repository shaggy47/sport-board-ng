var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();

app.use(express.static(path.resolve(__dirname,"../dist/")));
app.use(express.static(path.resolve(__dirname,"../node_modules")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.listen(3500);