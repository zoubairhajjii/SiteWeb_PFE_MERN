const DemandeSchema = require("../models/demande");

exports.addDemande = async (req, res) => {
  const { id } = req.params;
  try {
    const Demande = new DemandeSchema({
      ...req.body,
      userId: req.user._id,
      ServiceId: id,
    });
    await Demande.save();
    res.status(200).send({ msg: "Demande added", Demande });
  } catch (error) {
    res.status(500).send({ msg: "could not add Demande", error });
  }
};
exports.getDemande = async (req, res) => {
  try {
    const ListOfDemande = await DemandeSchema.find();
    res.status(200).send({ msg: "list of demande", ListOfDemande });
  } catch (error) {
    res.status(500).send({ msg: "could not get list of demande", error });
  }
};
exports.deleteDemande = async (req, res) => {
  const { id } = req.params;
  try {
    const DemandeDeleted = await DemandeSchema.findByIdAndDelete(id);
    res.status(200).send({ msg: "DemandeDeleted", DemandeDeleted });
  } catch (error) {
    res.status(500).send({ msg: "could not delete Demande", error });
  }
};
exports.editDemande = async (req, res) => {
  const { id } = req.params;
  try {
    const DemandeEdited = await DemandeSchema.findByIdAndUpdate(id, {
      $set: { ...req.body },
    });
    res.status(200).send({ msg: "demande edited", DemandeEdited });
  } catch (error) {
    res.status(500).send({ msg: "could not edit demande", error });
  }
};
