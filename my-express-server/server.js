const express = require("express");
const app = express();

app.get("/",function(req,res){
    res.send("<h1>Hello, World!</h1>");
})

app.get("/contact",function(req,res){
    res.send("Contact me at: neeleshgoyal88@gmail.com");
})

app.get("/about",function(req,res){
    res.send("Hi there, I am Neelesh Goyal and this is my website.");
})

app.get("/hobbies",function(req,res){
    res.send("<ul><li>coffee</li><li>code</li></ul>");
})

app.listen(3000,function(){
    console.log("Server started on port 3000.");
});