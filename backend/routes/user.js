const express = require("express");
const {
  GetUser,
  deleteUser,
  editUser,
  addUser,
} = require("../controllers/user");
const { isAuth } = require("../middlewares/isAuth");

const UserRoute = express.Router();
UserRoute.post("/addUser", addUser);
UserRoute.get("/users", isAuth, GetUser);
UserRoute.delete("/deleteuser/:id", isAuth, deleteUser);
UserRoute.put("/edituser/:id", isAuth, editUser);
module.exports = UserRoute;
