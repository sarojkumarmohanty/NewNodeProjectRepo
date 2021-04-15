var express = require('express');
var app=express();
var handlebars = require('express3-handlebars')
.create({ defaultLayout:'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.use(express.static("public"));
app.set('port',2020);

var fortunes = [
    "Conquer your fears or they will conquer you.",
    "Rivers need springs.",
    "Do not fear what you don't know.",
    "You will have a pleasant surprise.",
    "Whenever possible, keep it simple.",
    ];

app.get('/user/sayHello',function(req,res){
   // res.send("<h2>how express</h2>");
   res.render('about',{fortunes});

});

app.get('/user*',function(req,res){
    res.send("<h2>hi express, im using wildcard</h2>");
});
app.use(function(req,res){
    res.type('text/html');
    res.status(404);
    //res.send("this is my custom 404 msg");
    res.render('404');
});
app.listen(app.get('port'),function(){
    console.log("express is running on "+app.get('port')+" port");
});



