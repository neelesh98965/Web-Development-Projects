const express = require("express");
const bodyParser = require("body-parser");
const date = require( __dirname + "/date.js")

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"))

var newitems = ["Buy food","Cook food", "Eat food"];
let workitems = [];

app.get("/", function (req, res) {

  let day = date.getdate();
  res.render("lists", { kindofday: day, addnewitems: newitems });
});

app.post("/",function(req,res){
  console.log(req.body);
   var newitem = req.body.newitem;
  if(req.body.button === "Work"){
    workitems.push(newitem);
    res.redirect("/work");
  }
  else{
    newitems.push(newitem);
    res.redirect("/");
  }

   
})

app.get("/work",function(req,res){
  res.render("lists",{kindofday : "Work", addnewitems : workitems})
});

app.get("/about",function(req,res){
  res.render("about");
})

app.listen(3000, function () {
  console.log("Server is running on port 3000.");
});
