const express = require("express");
const {
  addDemande,
  getDemande,
  deleteDemande,
  editDemande,
} = require("../controllers/demande");
const { isAuth } = require("../middlewares/isAuth");

const DemandeRoute = express.Router();

DemandeRoute.post("/addDemande/:id", isAuth, addDemande);
DemandeRoute.get("/Demandes", isAuth, getDemande);
DemandeRoute.delete("/deleteDemande/:id", isAuth, deleteDemande);
DemandeRoute.put("/editDemande/:id", isAuth, editDemande);

module.exports = DemandeRoute;
