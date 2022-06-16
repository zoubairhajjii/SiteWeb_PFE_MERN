const mongoose = require("mongoose");
const UserSchema = mongoose.Schema({
  name: { type: String, required: true },
  prenom: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  Telephone: { type: String, required: true },
  Adresse: { type: String, required: true },
  role: {
    type: String,
    enum: ["Admin", "Professionnel", "Demandeur"],
    default: "Demandeur",
  },


 
});
module.exports =mongoose.model("User", UserSchema);
