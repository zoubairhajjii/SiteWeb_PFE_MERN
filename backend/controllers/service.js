const UserSchema = require("../models/auth");
const ServiceSchema = require("../models/service");

exports.addService = async (req, res) => {
  const { id } = req.params;
  try {
    const Professionnel = await UserSchema.findById(req.user._id);
    if (Professionnel.role === "Professionnel") {
      const Service = new ServiceSchema(req.body);
      await Service.save();
      res.status(200).send({ msg: "Service added", Service });
    } else {
      res
        .status(400)
        .send({ msg: "you are not authorizated for add a service" });
    }
  } catch (error) {
    res.status(500).send({ msg: "could not add Service", error });
  }
};
exports.getService = async (req, res) => {
  try {
    ListOfService = await ServiceSchema.find();
    res.status(200).send({ msg: "list of Service", ListOfService });
  } catch (error) {
    res.status(500).send({ msg: "could not get list of service", error });
  }
};
exports.deleteService = async (req, res) => {
  const { id } = req.params;
  try {
    const admin = await UserSchema.findById(req.user._id);
    if (admin.role === "Admin") {
      const ServiceDeleted = await ServiceSchema.findByIdAndDelete(id);
      res.status(200).send({ msg: "service has been deleted", ServiceDeleted });
    } else {
      res
        .status(400)
        .send({ msg: "you are not authorizated for delete service" });
    }
  } catch (error) {
    res.status(500).send({ msg: "could not delete Service", error });
  }
};
exports.editService = async (req, res) => {
  const { id } = req.params;
  try {
    const Professionnel = await UserSchema.findById(req.user._id);
    if (Professionnel.role === "Professionnel") {
      const ServiceEdited = await ServiceSchema.findByIdAndUpdate(id, {
        $set: { ...req.body },
      });
      res.status(200).send({ msg: "Service edited", ServiceEdited });
    } else {
      res
        .status(400)
        .send({ msg: "you are not authorizated for editing Service " });
    }
  } catch (error) {
    res.status(500).send({ msg: "could not edit Service" });
  }
};
