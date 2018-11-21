const mongoose = require('../utils/db');
const Schema = mongoose.Schema;

const { phoneValidator, nameValidator } = require('../utils/validator');

const userSchema = new Schema({
  phone: {
    type: String,
    required: [true, '请输入手机号码'],
    validate: {
      validator: function (v) {
        return phoneValidator.test(v);
      },
      message: props => `请输入正确的手机号码`
    }
  },
  username: {
    type: String,
    required: [true, '请输入昵称'],
    validate: {
      validator: function (v) {
        return nameValidator.test(v);
      },
      message: props => '请输入合法有效的昵称'
    }
  },
  password: {
    type: String,
    required: [true, '请输入密码']
  },
  type: {
    type: String,
    default: 'normal'
  }
});

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;
