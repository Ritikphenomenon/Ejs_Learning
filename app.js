const express= require('express');
const bodyparser=require('body-parser');
const { render } = require('ejs');

var app=express();

app.set("view engine","ejs");

var daytext="";

app.get("/",function(req,res){
    var d=new Date();
    var day=d.getDay();
    day=5;
    if(day==6 || day==0)
    daytext="weekend";
    else
    daytext="weekday";

    res.render("list",{dayej:daytext});
});

app.listen(3000,function(){
    console.log("server is running");
});