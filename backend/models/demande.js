const mongoose = require("mongoose");

const DemandeSchema = mongoose.Schema({
  date: { type: Date, default: Date.now() },
  nomService: String,
  etat: {
    type: String,
    enum: ["attente", "validé", "non validé"],
    default: "attente",
  },
  description: { type: String, required: true },
  Prix: { type: String },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "UserSchema",
  },
  ServiceId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ServiceSchema",
  },
});

module.exports = mongoose.model("Demande", DemandeSchema);
