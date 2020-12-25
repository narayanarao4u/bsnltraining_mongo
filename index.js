const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const app = express();

const port = 3000;

const connStr = 'mongodb+srv://vmssa:bsnlvizag@bsnlcertificate.cvskb.mongodb.net/bsnlTraining';

app.use(bodyParser.urlencoded({extended:true}));


MongoClient.connect(connStr, {
    useUnifiedTopology:true
}).then(client =>{
    console.log('Connected to Database');
    const db = client.db('bsnlTraining')
    const certificatesCollection = db.collection('certificates')


}).catch(err => console.log(err))


app.get('/', function(req,res){     
  res.sendFile(__dirname + '/index.html')
});


app.listen(process.env.PORT || port, () => console.log(`Example app listening at http://localhost:${port}`));

