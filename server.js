var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 8080; 

// app.use(express.static(__dirname + 'public/'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(__dirname + '/public'));
console.log(__dirname + 'public/')
app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.listen(PORT, function(){
    console.log("App listening on PORT:" + PORT);
})