const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')
const logger = require('logger');
const session = require('express-session');
const path = require('path');

const app = express();

const YelpRouter = require('../../../routers/Yelp/yelpRouter.js')

app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));
app.use(session({
  secret: 'helloworld',
  cookie: {maxAge: 60000},
  saveUninitialized: false,
}));
app.use(morgan('dev'))

app.use('/api/yelp', YelpRouter)

module.exports = app;