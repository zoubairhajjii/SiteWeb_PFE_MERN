const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserSchema = require("../models/auth");

exports.SignUp = async (req, res) => {
  const {
    nom,
    prenom,
    email,
    password,
    Telephone,
    Adresse,
    role,
  } = req.body;
  try {
    const user = new UserSchema(req.body);
    // verify email
    const foundUser = await UserSchema.findOne({ email });
    if (foundUser) {
      res.status(400).json({ msg: "user already exists" });
    }
    // crypt password
    const salt = 10;
    const passwordhashed = bcrypt.hashSync(password, salt);
    user.password = passwordhashed;
    // generate token
    const payload = { id: user._id };
    const token = jwt.sign(payload, "Secret");
    // send new User
    await user.save();
    res.status(200).json({ msg: "register with success", user, token });
  } catch (error) {
    res.status(500).json({ msg: "could not register", error });
  }
};
exports.SignIn = async (req, res) => {
  const { email, password } = req.body;
  try {
    const found = await UserSchema.findOne({ email });
    //verify email if true or no
    if (!found) {
      return res.status(400).json({ errors:[{ msg: "vérifier votre  email" }] });
    }
    // validation password
    const match = await bcrypt.compare(password, found.password);
    if (!match) {
      return res.status(400).json({ errors: [{ msg: "vérifier votre mot de passe" }] });
    }
    // generate token
    const payload = { id: found._id };
    const token = jwt.sign(payload, "Secret");
    //login
    res.status(200).json({ msg: "login with succes", found, token });
  } catch (error) {
    res.status(500).json({ msg: "could not login", error });
  }
};
exports.GetUser = async (req, res) => {
  try {
    const listOfUsers = await UserSchema.find();
    res.status(200).json({ msg: "list of users", listOfUsers });
  } catch (error) {
    res.status(500).json({ msg: "could not get users", error });
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
