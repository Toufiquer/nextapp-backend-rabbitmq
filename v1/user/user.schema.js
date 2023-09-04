const mongoose = require("mongoose");
const { userPreMiddleWare, userPostMiddleWare } = require("./user.middleware");
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "Please provide a name for this user"],
      trim: true,
      unique: true,
      minLength: [3, "Name required at list 3 letter"],
    },
  },
  {
    timestamps: true,
  }
);

// * middle ware
userSchema.pre("save", userPreMiddleWare);
userSchema.post("save", userPostMiddleWare);

// * static method
userSchema.methods.logger = function () {};
// call this method from controller

module.exports.userSchema = userSchema;
