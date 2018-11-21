const statusCode = {
  httpStatusCode: {
    OK: 200,
    CREATED: 201,
    NO_CONTENT: 204,
    BAD_REQUEST: 400,
    NOT_FOUND: 404,
    SERVE_ERR: 500
  },
  customRspCode: {
    OK: 0,
    PARAM_ERR: 1, // 请求参数有误
    SERVER_ERR: 2
  }
}

module.exports = statusCode
