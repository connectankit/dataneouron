require('dotenv').config({urlencoded:true})
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();
// const connectToMongo = require("./config/mongodb")
const rateLimit = require('express-rate-limit');
const limiter = rateLimit({
    windowMs:  1000, // 1 sec
    max: Number(process.env.MAX_LIMIT_PER_SECONDS),
    message: 'Too many requests from this IP, please try again later.'
  });

app.use(limiter);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())
app.use(express.json())
app.use(cors()) 
app.use(express.json())

app.use(`/api`, require("./routes/dashboard"))
app.all('*', (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
})

module.exports = app;