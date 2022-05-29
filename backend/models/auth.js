const mongoose = require("mongoose");
const Joi = require("joi");
const UserSchema = mongoose.Schema({
  name: { type: String, required: true },
  prenom: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  Telephone: { type: String, required: true, unique: true },

  Profession: String,
  Adresse: String,
  Age: String,
  position: String,
  tarif: String,
  photo_profil: String,
  role: {
    type: String,
    enum: ["Admin", "Professionnel", "Demandeur"],
    default: "Demandeur",
  },
});
module.exports =mongoose.model("user", UserSchema);
User = mongoose.model("user", UserSchema);
const validate = (user) => {const schema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  
  });
  return schema.validate(user);
};

module.exports = { User, validate };