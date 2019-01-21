var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var shopcartsRouter = require('./routes/shopcarts');
var swiperRouter = require('./routes/swiper')
var indexMenuRouter = require('./routes/index-menu')
var indexActiveRouter = require('./routes/index-active')
var indexSchoolRouter = require('./routes/index-school')
var selectsRouter = require('./routes/selects')
var indexListRouter = require('./routes/index-list')


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use('/shopcarts', shopcartsRouter);
app.use('/swiper',swiperRouter)
app.use('/index-menu',indexMenuRouter)
app.use('/index-active',indexActiveRouter)
app.use('/index-school',indexSchoolRouter)
app.use('/selects',selectsRouter)
app.use('/list',indexListRouter)


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
