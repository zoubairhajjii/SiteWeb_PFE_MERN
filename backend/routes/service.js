const express = require("express");
const {
  addService,
  getService,
  deleteService,
  editService,
  getServiceByCatName,
} = require("../controllers/service");
const { isAuth } = require("../middlewares/isAuth");

const ServiceRoute = express.Router(); 

ServiceRoute.post("/addService/:id_user",isAuth, addService);
ServiceRoute.get("/getByServiceName/:name", getServiceByCatName);
ServiceRoute.get("/services", getService);
ServiceRoute.delete("/deleteService/:id", isAuth, deleteService);
ServiceRoute.put("/editService/:id", isAuth, editService);

module.exports = ServiceRoute;
