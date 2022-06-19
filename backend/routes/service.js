const express = require("express");
const {
  addService,
  getService,
  getServiceByProId,
  deleteService,
  editService,
  getServiceByCatName,
  getProductById,
  getServiceByCatKey,
} = require("../controllers/service");
const { isAuth } = require("../middlewares/isAuth");

const ServiceRoute = express.Router();
getServiceByProId
ServiceRoute.post("/addService/:id_user", isAuth, addService);
ServiceRoute.get("/getProDemandes/:userid",getServiceByProId)
ServiceRoute.get("/getByServiceName/:name", getServiceByCatName);
ServiceRoute.get("/getProductDetail/:id", getProductById);
ServiceRoute.get("/services", getService);
ServiceRoute.delete("/deleteService/:id_user/:id", deleteService);
ServiceRoute.put("/editService/:id/:id_user", editService);
ServiceRoute.get("/getKey/:Key", getServiceByCatKey);


module.exports = ServiceRoute;
