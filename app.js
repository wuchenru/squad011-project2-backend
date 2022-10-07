const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended:true}));

//setting up express app to allow for routing ^^

app.get("/", function(req,res){

  //home page displayed
  res.sendFile(__dirname + "/pages/home.html");
});

app.post("/", function(req,res){

  //when user click create internship redirect them to the next page
  res.redirect("/intern-desc");
});


app.get("/intern-desc", function(req,res){

  res.sendFile(__dirname + "/pages/intern-desc.html");
});

app.post("/intern-desc", function(req,res){

  // if user clicks back button redirect to home page, if they click next redirect them to intern guide page
  if(req.body.hasOwnProperty("back")){

     res.redirect("/");
  }else{

     res.redirect("/intern-guide")
  }

});

app.get("/intern-guide", function(req,res){

  res.sendFile(__dirname + "/pages/intern-guide.html");
});








//allows server to be run on local device for testing
app.listen(3000, function(req,res){

  console.log("Server is running.");
});
