const express = require('express');
const mongoose = require('mongoose');
const redis = require('redis');

//init app
const app = express();
const PORT = 4000 // add port 


// connect to redis
const REDIS_HOST = 'redis';
const REDIS_PORT = 6379;
const redisClient = redis.createClient({
    url: `redis://${REDIS_HOST}:${REDIS_PORT}`
});
redisClient.on("error", (err) => console.log("Redis Client Error", err));
redisClient.on("connect", () => console.log("connect to redis..."));
redisClient.connect();

//connect to db
const DB_USER = 'root';
const DB_PASSWORD = 'example';
const DB_PORT = 27017;
const DB_HOST = 'mongo';

const URI = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}`
mongoose.connect(URI)
.then(() => console.log('connect to db..'))
.catch((err) => console.log('faild connect to db' , err));

app.get('/', (req, res) => { 
    redisClient.set('product' , 'product...');
    res.send('<h1> Hello Docker!</h1>')
});



app.get('/data', async (req, res) => { 
    const product = await redisClient.get('product');

    res.send(`<h1> Hello Docker!</h1> <h2>${product}</h2>`)
});



app.listen(PORT, () => console.log(`app is up and running in port : ${PORT}`) ); 