const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const app = express();

const PORT = 3000;

const connStr = 'mongodb+srv://vmssa:bsnlvizag@bsnlcertificate.cvskb.mongodb.net/bsnlTraining';

app.use(bodyParser.urlencoded({extended:true}));


MongoClient.connect(connStr, {
    useUnifiedTopology:true
}).then(client =>{
    console.log('Connected to Database');
    const db = client.db('bsnlTraining')
    const certificatesCollection = db.collection('certificates')

    app.get('/', function(req,res){
        
        db.collection('certificates').find().toArray()
            .then(result=>{
                    res.json(result);
            })
            .catch(error => console.error(error))

    });
    
    
    app.listen(PORT,()=>{
        console.log(`listening on port : ${PORT}`);
    });



}).catch(err => console.log(err))

