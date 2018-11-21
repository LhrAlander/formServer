const User = require('../models/user');
const CustomException = require('../utils/customException');
const { parseModel, handleValidateErr } = require('../utils/dbHelpers');
const { httpStatusCode, customRspCode } = require('../httpStatus/statusCode');

class UserController {
  getOne (req, res, next) {
    User.findOne({ phone: req.params.phone }).then(user => {
      if (!user) throw new CustomException(customRspCode.SERVER_ERR, '未能找到该用户');
      res.status(httpStatusCode.OK).json({
        code: customRspCode.OK,
        msg: 'success',
        user
      });
    }).catch(error => {
      if (error instanceof CustomException) {
        return res.status(httpStatusCode.OK).json({
          code: error.code,
          msg: error.msg
        });
      }
      return res.status(httpStatusCode.SERVE_ERR).end('服务器错误');
    });
  }
  createOne (req, res, next) {
    let user = parseModel(req, User);
    let errors = handleValidateErr(user.validateSync());
    if (errors) {
      res.status(httpStatusCode.OK).json({
        code: customRspCode.PARAM_ERR,
        errors
      });
      return;
    }
    user.save().then(result => {
      console.log('保存成功', result);
    }).catch(err => {
      console.log('保存失败', err);
    });
    res.status(httpStatusCode.OK).json({
      code: customRspCode.OK,
      msg: 'success'
    });
  }
}

module.exports = UserController;
