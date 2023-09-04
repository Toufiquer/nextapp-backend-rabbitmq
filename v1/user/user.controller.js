const {
  userServiceSave,
  userServiceGet,
  userServiceGetId,
  userServiceDelete,
  userServiceUpdate,
} = require("./user.service");

module.exports.saveUser = async (req, res, next) => {
  try {
    const result = await userServiceSave(req.body);
    res.status(200).send({
      status: "success",
      message: "Data is saved",
      data: result,
    });
  } catch (err) {
    res.status(400).send({
      status: "failed to Save",
      message: err.message,
    });
  }
};
module.exports.getUserId = async (req, res, next) => {
  try {
    const result = await userServiceGetId(req?.params?.id);
    res.status(200).send({
      status: "success",
      message: "Data is saved",
      data: result,
    });
  } catch (err) {
    res.status(400).send({
      status: "failed to Save",
      message: err.message,
    });
  }
};
module.exports.getUser = async (req, res, next) => {
  try {
    const result = await userServiceGet(req.body);
    res.status(200).send({
      status: "success",
      message: "Data is saved",
      data: result,
    });
  } catch (err) {
    res.status(400).send({
      status: "failed to Save",
      message: err.message,
    });
  }
};
module.exports.updateUser = async (req, res, next) => {
  try {
    const result = await userServiceUpdate({
      id: req.params.id,
      data: req.body,
    });
    res.status(200).send({
      status: "success",
      message: "Data is saved",
      data: result,
    });
  } catch (err) {
    res.status(400).send({
      status: "failed to Save",
      message: err.message,
    });
  }
};
module.exports.deleteUser = async (req, res, next) => {
  try {
    const result = await userServiceDelete(req.params?.id);
    res.status(200).send({
      status: "success",
      message: "Data is saved",
      data: result,
    });
  } catch (err) {
    res.status(400).send({
      status: "failed to Save",
      message: err.message,
    });
  }
};
