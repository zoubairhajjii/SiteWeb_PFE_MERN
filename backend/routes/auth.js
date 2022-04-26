const express = require("express");
const {
  SignUp,
  SignIn,
  GetUser,
  deleteUser,
  editUser,
} = require("../controllers/auth");
const { isAuth } = require("../middlewares/isAuth");
const {
  RegisterValidation,
  Validation,
  LoginValidation,
} = require("../middlewares/Register");

const AuthRoute = express.Router();
AuthRoute.post("/signUp", RegisterValidation, Validation, SignUp);
AuthRoute.post("/signIn", LoginValidation, Validation, SignIn);
AuthRoute.get("/users", isAuth, GetUser);
AuthRoute.delete("/deleteuser/:id", isAuth, deleteUser);
AuthRoute.put("/edituser/:id", isAuth, editUser);
AuthRoute.get("/current", isAuth, (req, res) => res.send(req.user));
module.exports = AuthRoute;
