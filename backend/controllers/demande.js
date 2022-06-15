const DemandeSchema = require("../models/demande");
const ServiceSchema = require("../models/service");

exports.addDemande = async (req, res) => {
  const { id, userId } = req.params;
  try {
    const Demande = new DemandeSchema({
      ...req.body,
      userId: userId,
      ServiceId: id,
    });
    await Demande.save();
    res.status(200).send({ msg: "Demande added", Demande });
  } catch (error) {
    res.status(500).send({ msg: "could not add Demande", error });
  }
};

exports.getDemandesPro = async (req, res) => {
  const { id } = req.params;
  var resf = [];
  try {
    await ServiceSchema.find({ userId: id }).then(async (result) => {
      for (const element of result) {
        await DemandeSchema.find({ ServiceId: element._id }).populate("userId").then(
          async (finalres) => {
            var objt = { service: element, demandes: finalres };

            resf.push(objt);
          }
        );
      }
    });

    res.status(200).send(resf);
  } catch (error) {
    res.status(500).send({ msg: "could not get list of demande", error });
  }
};

exports.getDemande = async (req, res) => {
  const { id } = req.params;
  try {
    const ListOfDemande =  await DemandeSchema.find({
      userId: id,
    }).populate("ServiceId");
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

exports.acceptDeny = async (req, res) => {
  const { id,status } = req.params;
  try {
    const DemandeEdited = await DemandeSchema.findByIdAndUpdate(id, {"etat":status==1?"validé":"non validé"
    });
    res.status(200).send({ msg: "demande edited", DemandeEdited });
  } catch (error) {
    res.status(500).send({ msg: "could not edit demande", error });
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
