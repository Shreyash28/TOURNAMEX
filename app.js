var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser")
    var methodOverride=require("method-override");;
   


app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"))


app.get("/",function(req,res){
    
    res.render("index.ejs")
});
app.get("/fairplay",function(req,res){
    res.render("aboutus.ejs")
})

app.listen(2000,process.env.IP,function(){
    console.log("server started")
})