// const { parseModel, handleValidateErr } = require('../utils/dbHelpers')
import { parseModel, handleValidateErr } from '../utils/dbHelpers'
const User = require('../models/user')
const { httpStatusCode, customRspCode } = require('../httpStatus/statusCode')

class UserController {
  getOne (req, res, next) {
    console.log(req.userId)
    res.status(httpStatusCode.OK).json({
      code: httpStatusCode.OK,
      msg: 'success'
    })
  }
  createOne (req, res, next) {
    let user = parseModel(req, User)
    let errors = handleValidateErr(user.validateSync())
    if (errors) {
      res.status(httpStatusCode.OK).json({
        code: customRspCode.PARAM_ERR,
        errors
      })
      return
    }
    res.status(httpStatusCode.OK).json({
      code: customRspCode.OK,
      msg: 'success'
    })
  }
}

module.exports = UserController
