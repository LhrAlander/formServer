const phoneValidator = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/;

const nameValidator = {
  test: function (v) {
    if (typeof v !== 'string') return false;
    v = v.trim();
    if (v.length < 1 || v.length > 12) return false;
    const patterns = ['<', '>', '/', '\\'];
    return !patterns.some(_ => v.indexOf(_) > -1);
  }
};

module.exports = {
  phoneValidator,
  nameValidator
};
