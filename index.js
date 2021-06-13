const express = require('express');
const bodyParser = require('body-parser');

const app  = express();


var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}

app.use(allowCrossDomain);


app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

const connStr = "mongodb://localhost:27017/bsnlTraining";
//const connStr = 'mongodb+srv://vmssa:bsnlvizag@bsnlcertificate.cvskb.mongodb.net/bsnlTraining';
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(connStr, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

app.get('/',(req,res)=>{
    res.send('Hello Mongo');
});


// Use Api routes in the App
let apiRoutes = require("./api-route");
app.use('/api', apiRoutes);

const port = process.env.PORT || 3000;
app.listen(port, ()=>console.log(`listening port : ${port}`));
