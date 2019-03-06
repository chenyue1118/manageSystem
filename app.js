const express = require('express');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const ejs = require('ejs');
const createError = require('http-errors');
const router = require('./routes/index');
const views = require('./routes/views');
const config = require('./config.json')

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

// setup the logger for requests
app.use(morgan('dev'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// mount all  APIs to /api
app.use('/api', router);
app.use('/views', views);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// start the server
app.listen(config.port, () => {
  console.log('Server at %d', config.port);
});
