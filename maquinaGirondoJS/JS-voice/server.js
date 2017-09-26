var express =   require("express");
var app         =   express();

app.use(express.static(__dirname + '/static'));

app.get('/',function(req,res){
  res.sendFile(__dirname + "/index.html");
});

app.listen(3000,function(){
  console.log("Working on port 3000");
});
