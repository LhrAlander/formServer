const createError = require('http-errors');
const express = require('express');
const path = require('path');
const fs = require('fs');
const logger = require('morgan');
const app = express();

const router = require('./router')

// create a write stream (in append mode)
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'log.log'), { flags: 'a' })
app.use(logger(function (tokens, req, res) {
  let time = new Date()
  return [
    time.toLocaleDateString(),
    time.toLocaleTimeString(),
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens.res(req, res, 'content-length'), '-',
    tokens['response-time'](req, res), 'ms'
  ].join(' ')
}, { stream: accessLogStream }));
app.use(express.json({
  type: ['application/json', 'text/*']
}));
app.use(express.urlencoded({ extended: false }));
router(app);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  console.log('err');
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500).send('not found');
});

module.exports = app;
