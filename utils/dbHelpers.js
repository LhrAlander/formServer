const parseModel = function (req, Model) {
  let keys = Object.keys(Model.schema.paths);
  let reqName = Model.modelName.toLowerCase();
  req[reqName] = {};
  keys.forEach(_ => {
    if (_ in req.body) {
      console.log(_);
      req[reqName][_] = req.body[_];
    }
  });
  return new Model({
    ...req[reqName]
  });
};

/**
 * 解析model实例的验证错误
 * @param {model 实例验证返回的对象} error
 */
const handleValidateErr = function (error) {
  let res = false;
  if (error) {
    res = [];
    for (let k in error.errors) {
      res.push(error.errors[k].message);
    }
  }
  return res;
};

module.exports = {
  parseModel,
  handleValidateErr
};
