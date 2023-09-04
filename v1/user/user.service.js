const { userModel } = require("./user.model");

module.exports.userServiceSave = async (data) => {
  // @ save
  // const user = new userModel(data);
  // $ do any thing before save
  // const result = await user.save();
  // @ create

  console.log(data, " => Line No: 10");
  const result = await userModel.create({ ...data });
  // result.logger();
  return result;
};
module.exports.userServiceGetId = async (id) => {
  // @ find all
  console.log(id, " => Line No: 17");
  const result = await userModel.findOne({ _id: id });
  // @ find a doc
  // const result = await userModel.find({id: "1234..."});
  // const result = await userModel.findById("1234");
  // @ find all doc $or
  // const result = await userModel.find({$or: [{id: "123"},{name: "name"}]});
  // const result = await userModel.find({},{name,quantity});
  // @ find all doc $ne
  // const result = await userModel.find({},{-name,-quantity});
  //  * all can add .find.skip().limit()
  //  * all can add .find.sort({quantity: -1})

  // @ find all doc chaining
  //   const result = await userModel
  //     .where("name")
  //     .equals(/\w/)
  //     .where("quantity")
  //     .length(2)
  //     .lt(1000)
  //     .limit(2)
  //     .sort({ quantity: -1 });

  return result;
};
module.exports.userServiceGet = async (id) => {
  // @ find all
  const result = await userModel.find({});
  // @ find a doc
  // const result = await userModel.find({id: "1234..."});
  // const result = await userModel.findById("1234");
  // @ find all doc $or
  // const result = await userModel.find({$or: [{id: "123"},{name: "name"}]});
  // const result = await userModel.find({},{name,quantity});
  // @ find all doc $ne
  // const result = await userModel.find({},{-name,-quantity});
  //  * all can add .find.skip().limit()
  //  * all can add .find.sort({quantity: -1})

  // @ find all doc chaining
  //   const result = await userModel
  //     .where("name")
  //     .equals(/\w/)
  //     .where("quantity")
  //     .length(2)
  //     .lt(1000)
  //     .limit(2)
  //     .sort({ quantity: -1 });

  return result;
};
module.exports.userServiceUpdate = async ({ id, data }) => {
  // @ update a user

  console.log(
    {
      id,
      data,
    },
    " => Line No: 76"
  );
  const query = { _id: id };
  const update = { $set: { ...data } };
  const options = {
    new: true,
  };
  const result = await userModel.findOneAndUpdate(query, update, options);
  return result;
};
module.exports.userServiceDelete = async (id) => {
  // @ delete a user
  const result = await userModel.deleteOne({ _id: id });
  return result;
};
