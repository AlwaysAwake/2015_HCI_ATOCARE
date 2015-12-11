var express         = require('express');
var path            = require('path');
var favicon         = require('serve-favicon');
var logger          = require('morgan');
var cookieParser    = require('cookie-parser');
var bodyParser      = require('body-parser');

var index           = require('./routes/index');
var statistics      = require('./routes/statistics');
var environment     = require('./routes/environment');
var baby            = require('./routes/baby');
var schedule        = require('./routes/schedule');
var alarm           = require('./routes/alarm');
var food            = require('./routes/food');
var settings        = require('./routes/settings');

var app = express();


/**
 * View Engine Setup
 * ==================================
 */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


/**
 * Middlewares
 * ==================================
 */
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


/**
 * Route Handlers
 * ==================================
 */
app.get('/', index.view);
app.get('/statistics', statistics.view);
app.get('/environment', environment.view);
app.get('/baby/profile', baby.profileView);
app.get('/baby/register', baby.registerView);
app.get('/schedule', schedule.view);
app.get('/alarm', alarm.view);
app.get('/food', food.view);
app.get('/settings', settings.view);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


/**
 * Error Handlers
 * ==================================
 */
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
