const users = require('./routers/users');

module.exports = function (app) {
  app.use('/users', users);
};
