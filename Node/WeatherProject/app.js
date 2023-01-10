const express = require("express");
const https = require("https");
const bodyparser = require("body-parser");
const app = express();

app.use(bodyparser.urlencoded({extended: true}));

app.get("/",function(req,res){
   res.sendFile(__dirname+"/index.html");
})

app.post("/",function(req,res){
    const query = req.body.cityName;
const apiKey = "681cc34683d6cb62bc03d46cc9a1b384";
const unit = "metric";
const url = "https://api.openweathermap.org/data/2.5/weather?q="+query+"&appid="+apiKey+"&units="+unit;

https.get(url,function(response){
    console.log(response.statusCode);
    response.on("data",function(data){
        const weatherData = JSON.parse(data);
     const temp = weatherData.main.temp;
       const weatherDescription = weatherData.weather[0].description;
     const icon = weatherData.weather[0].icon;
     const iconurl ="http://openweathermap.org/img/wn/"+icon+"@2x.png";
     
     res.write("<p>The weather description is "+weatherDescription+" .</p>")
     res.write("<h1>The temp of "+query+" is "+temp+" degree celsius.</h1>");
     res.write("<img src ="+iconurl+">" )
     res.send();
    })
})

})


app.listen(3000,function(){
    console.log("Server is running on port 3000.")   
})