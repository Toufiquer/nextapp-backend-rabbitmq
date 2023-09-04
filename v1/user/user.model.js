const mongoose = require("mongoose");
const { userSchema } = require("./user.schema");
module.exports.userModel = mongoose.model("User", userSchema);
