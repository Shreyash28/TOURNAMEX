var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser")
    var methodOverride=require("method-override")
    mongoose    = require("mongoose"),
    passport    = require("passport"),
    LocalStrategy = require("passport-local")
    mongoose.connect("mongodb://localhost:27017/Tournamex",{ useUnifiedTopology: true,useNewUrlParser: true})


app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"))
// PASSPORT CONFIGURATION
app.use(require("express-session")({
    secret: "Tournamex",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//Tournamex
app.get("/",function(req,res){
    
    res.render("tournamex/index.ejs")
});

//Apps

app.get("/screenshots",function(req,res){
    
    res.render("tournamex/screenshots.ejs")
});

app.get("/features",function(req,res){
    
    res.render("tournamex/features.ejs")
});

app.get("/stats",function(req,res){
    
    res.render("tournamex/stats.ejs")
});

//POLICY

app.get("/fairplay-policy",function(req,res){
    res.render("tournamex/fairplay.ejs")
})

app.get("/refund-policy",function(req,res){
    res.render("tournamex/refund.ejs")
})

app.get("/cancellation-policy",function(req,res){
    res.render("tournamex/cancellation.ejs")
})

//ABOUT

app.get("/About-Us",function(req,res){
    res.render("tournamex/about.ejs")
})



app.listen(2000,process.env.IP,function(){
    console.log("server started")
})