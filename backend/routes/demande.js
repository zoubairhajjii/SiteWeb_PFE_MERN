const express = require("express");
const {
  addDemande,
  getDemande,
  deleteDemande,
  editDemande,
  getDemandesPro,
} = require("../controllers/demande");
const { isAuth } = require("../middlewares/isAuth");

const DemandeRoute = express.Router();

DemandeRoute.get("/ddd/:id", getDemandesPro);
DemandeRoute.post("/addDemande/:id/:userId", addDemande);
DemandeRoute.get("/Demandes/:id", getDemande);
DemandeRoute.delete("/deleteDemande/:id", deleteDemande);
DemandeRoute.put("/editDemande/:id", editDemande);

module.exports = DemandeRoute;
