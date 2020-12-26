const express = require('express');
const bodyParser = require('body-parser');

const app  = express();

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

// const connStr = "mongodb://localhost:27017/Bpc";
const connStr = 'mongodb+srv://vmssa:bsnlvizag@bsnlcertificate.cvskb.mongodb.net/bsnlTraining';
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