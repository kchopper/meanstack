const express = require ('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./config/database');
const path = require('path');

mongoose.Promise = global.Promise;
mongoose.connect(config.uri, (err) => {
    if (err){
        console.log('COULD not be connected', err);
    }
    else{
        console.log('connection established with database', config.db);
    }
});

app.use(express.static(__dirname + '/client/dist'));

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname + '/client/dist/index.html'));
});

app.listen(8080, () => {
    console.log('Server listening on 8080');
});
