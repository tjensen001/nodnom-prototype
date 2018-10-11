var Sequelize           = require('sequelize'),
    express             = require('express'),
    bodyParser          = require('body-parser'),
    Passport            = require('passport'),
    localStrategy       = require('passport-local'),
    PostGres            = require('pg');

const { Pool, Client }  = require('pg');

//-----------------------------Main Configuration-------------------------------//

var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public")); 


//---------------------------Passport Configuration----------------------------//
app.use(require("express-session")({
    secret: process.env.HEHE,
    resave: false,
    saveUninitialized: false
 }));

app.use(Passport.initialize());
app.use(Passport.session());

var APIURL = ""; //Api reference link will go here

//------------------------------Api Routes-----------------------------------//




//Serve our app on the port we specify
app.listen(process.env.PORT, process.env.IP, () => {
    console.log("Now serving port: " + process.env.PORT);
}).catch((error) => {
    console.log(error);
});