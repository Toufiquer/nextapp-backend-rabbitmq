module.exports.userPreMiddleWare = function (next) {
  if (this.quantity === 0) {
    this.status = "out-of-stock";
  }
  next();
};
module.exports.userPostMiddleWare = function (doc, next) {
  next();
};
