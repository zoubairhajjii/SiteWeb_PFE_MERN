const express = require("express");
const {
  addService,
  getService,
  deleteService,
  editService,
} = require("../controllers/service");
const { isAuth } = require("../middlewares/isAuth");

const ServiceRoute = express.Router();

ServiceRoute.post("/addService", isAuth, addService);
ServiceRoute.get("/Services", isAuth, getService);
ServiceRoute.delete("/deleteService/:id", isAuth, deleteService);
ServiceRoute.put("/editService/:id", isAuth, editService);

module.exports = ServiceRoute;
