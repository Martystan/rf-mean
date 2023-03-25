const express = require('express');
const app = express();
// const cors = require('cors')
//
// app.use(cors())
// app.use(express.json())
//
// app.get('/', function (req, res) { // NEW
//     res.send('Hello World!');
// });
//
// app.listen(3000, function () { // NEW
//     console.log('App running on port 5000');
// });
const MongoClient= require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router');
const cors = require('cors');

app.use(cors())
app.use(express.json())

// MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true }, (err, client) => {
//     if(err) {
//         console.log(err);
//     }
//
//     const db = client.db('solar_system');
//     const planetsCollection = db.collection('planets');
//     const planetsRouter = createRouter(planetsCollection)
//     app.use('/api/planets', planetsRouter);
//
//
//     app.listen(5000, function(){
//         console.log(`app listening on port ${this.address().port}`);
//     })
// })
MongoClient.connect('mongodb://localhost:27017')
    .then((client) => {
        const db = client.db('farmData');

        const boostersCollection = db.collection('boosters');
        const boostersRouter = createRouter(boostersCollection);
        app.use('/api/boosters', boostersRouter);

        const factoriesCollection = db.collection('factories');
        const factoriesRouter = createRouter(factoriesCollection);
        app.use('/api/factories', factoriesRouter);

        app.listen(4000, function(){
    console.log(`app listening on port ${this.address().port}`);
 })


    })
    .catch(console.error);



