const express = require("express");
const ValidateLogin=require("../validation/Login")
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
  
  LoginValidation,

} = require("../middlewares/Register");
const {Validation}=require("../middlewares/Validation")
const AuthRoute = express.Router();
AuthRoute.post("/signUp", RegisterValidation, Validation, SignUp);
AuthRoute.post("/signIn",LoginValidation, SignIn);
AuthRoute.get("/users", isAuth, GetUser);
AuthRoute.delete("/deleteuser/:id", isAuth, deleteUser);
AuthRoute.put("/edituser/:id", isAuth, editUser);
AuthRoute.get("/current", isAuth, (req, res) => res.send(req.user));

module.exports = AuthRoute;
