// Application configuration
const express = require("express");
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const multer = require('multer');
const jsonwebtoken = require('jsonwebtoken');
const mysql = require('mysql');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoSanitize = require('express-mongo-sanitize');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const hpp = require('hpp');
const validator = require('validator');

const app = new express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
app.use(helmet());
app.use(hpp());
app.use(mongoSanitize());
app.use(rateLimit());

const router = require("./src/Routes/api");


// Application routes
app.use('/api',router);

// Define a middleware for handling undefined routes (404 Not Found)
app.use((req, res,) => {
    res.status(404).json('404 Not Founded');
  });

module.exports = app;