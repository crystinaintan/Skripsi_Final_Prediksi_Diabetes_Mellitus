var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var apiRouter = require('./routes/api');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//run frontend
app.use(express.static(path.join(__dirname, 'build', '../../prediksi_diabetesmellitus_id3/build')));
app.get('/', function(req,res) {
  res.sendFile(path.join(__dirname, 'build', '../../prediksi_diabetesmellitus_id3/build/index.html'))
});

//Tambahan Baru
// var allowCrossDomain = function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*"); // allow requests from any other server
//   res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE'); // allow these verbs
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Cache-Control");
// }   
// app.use(allowCrossDomain); // plumbing it in as middleware
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*"); // allow requests from any other server
//   res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE'); // allow these verbs
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Cache-Control");
//   next();
// });
app.use(cors());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api', apiRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  //next(createError(404));
  res.sendFile(path.join(__dirname, 'build', '../../prediksi_diabetesmellitus_id3/build/index.html'))
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
