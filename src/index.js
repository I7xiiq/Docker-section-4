const express = require('express');
const mongoose = require('mongoose');

//init app
const app = express();
const PORT = 4000 // add port 


//connect to db
const DB_USER = 'root';
const DB_PASSWORD = 'example';
const DB_PORT = 27017;
const DB_HOST = 'mongo';

const URI = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}`
mongoose.connect(URI)
.then(() => console.log('connect to db..'))
.catch((err) => console.log('faild connect to db' , err));

app.get('/', (req, res) => res.send('<h1> Hello Docker!</h1>'));

app.listen(PORT, () => console.log(`app is up and running in port : ${PORT}`) ); 