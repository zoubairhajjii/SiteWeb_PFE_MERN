const UserSchema = require("../models/auth");
const bcrypt = require("bcrypt");
exports.GetUser = async (req, res) => {
  try {
    const listOfUsers = await UserSchema.find();
    res.status(200).json({ msg: "list of users", listOfUsers });
  } catch (error) {
    res.status(500).json({ msg: "could not get users", error });
  }
};
exports.deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const userDeleted = await UserSchema.findByIdAndDelete(id);
    res.status(200).json({ msg: "user deleted", userDeleted });
  } catch (error) {
    res.status(500).json({ msg: "could not delete user", error });
  }
};
exports.editUser = async (req, res) => {
  const { id } = req.params;
  try {
    const userAppUpdated = await UserSchema.findByIdAndUpdate(id, {
      $set: { ...req.body },
    });

    res.status(200).json({ msg: "user updated", userAppUpdated });
  } catch (error) {
    res.status(500).json("could not update userApp");
  }
};
exports.addUser = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await UserSchema.findOne({ email });
    //verify email if true or no
    if (user) {
      return res
        .status(400)
        .json({ errors: [{ msg: "not add " }] });
        
    } else {
     await UserSchema.create(req.body);
      res.status(200).json({ message: "User added with success" });
    }
   
} catch (error) {
    res.status(500).send({ msg: "could not add user", error });
  }
};
