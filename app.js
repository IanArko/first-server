var express = require("express");
var app = express();
var ip = require("ip");

app.use(express.static("public"));

app.get("/", function(req, res){
  console.log("A Page request happened");
  //res.send("This is not a test.");
  var dirname = 'C:/Projects/firstServer/views/home.html';
  res.sendFile(dirname);
});

app.listen(3000, ip.address(), function(){
    console.log("Your server is now running at " + ip.address());
});
