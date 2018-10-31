var Sequelize           = require('sequelize'),
    express             = require('express'),
    bodyParser          = require('body-parser'),
    Passport            = require('passport'),
    localStrategy       = require('passport-local'),
    PostGres            = require('pg');

require('dotenv').config();
var Sequelize  = require('sequelize');


//-----------------------------Main Configuration-------------------------------//

var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public")); 


//---------------------------Passport Configuration----------------------------//
var APIURL = ""; //Api reference link will go here

//------------------------------Api Routes-----------------------------------//

//connect
console.log(process.env.user)

console.log(process.env.PASSWORD)

console.log(process.env.DB)

console.log(process.env.ENDPOINT)

var sequelize = new Sequelize({
    username: process.env.USER,
    password:process.env.PASSWORD,
    database: process.env.DB,
    host: process.env.ENDPOINT,
    port: 5432,
    dialect: 'postgres'
});


sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

//Serve our app on the port we specify
app.listen(process.env.PORT, process.env.IP, () => {
    console.log("Now serving port: " + process.env.PORT);
})