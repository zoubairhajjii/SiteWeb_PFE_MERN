const express = require("express");
const {
  GetUser,
  deleteUser,
  editUser,
  addUser,
  GetUserById
} = require("../controllers/user");
const { isAuth } = require("../middlewares/isAuth");

const UserRoute = express.Router();
UserRoute.post("/addUser", addUser);
UserRoute.get("/users", GetUser);
UserRoute.get("/user/:id",GetUserById);

UserRoute.delete("/deleteuser/:id", deleteUser);
UserRoute.put("/edituser/:id", editUser);
module.exports = UserRoute;
