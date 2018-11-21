const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/hznu_form', { useNewUrlParser: true });

console.log('开始链接mongodb');

mongoose.connection.on('open', function () {
  console.log('链接成功');
});

mongoose.connection.on('disconnected', function () {
  console.log('已经断开mongodb链接');
});

mongoose.connection.on('error', function (err) {
  console.log('链接mongodb出现异常', err);
});

module.exports = mongoose;
