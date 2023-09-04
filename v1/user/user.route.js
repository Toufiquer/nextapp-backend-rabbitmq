const express = require("express");
const router = express.Router();
const userRouter = require("./user.controller");
router.route("/").get(userRouter.getUser).post(userRouter.saveUser);

//  * if has an id
router
  .route("/:id")
  .get(userRouter.getUserId)
  .put(userRouter.updateUser)
  .delete(userRouter.deleteUser);
module.exports = router;
