const express = require("express");
const {
  addService,
  getService,
  getServiceByProId,
  deleteService,
  editService,
  getServiceByCatName,
  getProductById,
} = require("../controllers/service");
const { isAuth } = require("../middlewares/isAuth");

const ServiceRoute = express.Router();

ServiceRoute.post("/addService/:id_user", isAuth, addService);

ServiceRoute.get("/getProDemandes/:userid",getServiceByProId)
ServiceRoute.get("/getByServiceName/:name", getServiceByCatName);
ServiceRoute.get("/getProductDetail/:id", getProductById);
ServiceRoute.get("/services", getService);
ServiceRoute.delete("/deleteService/:id", isAuth, deleteService);
ServiceRoute.put("/editService/:id", isAuth, editService);

module.exports = ServiceRoute;
