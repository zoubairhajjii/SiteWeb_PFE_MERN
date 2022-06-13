const mongoose = require("mongoose");

const DemandeSchema = mongoose.Schema({
  date: { type: Date, default: Date.now() },
  etat: {
    type: String,
    enum: ["attente", "validé", "non validé"],
    default: "attente",
  },
  description: { type: String, required: true },
  prix: { type: String },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  ServiceId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Service",
  },
});

module.exports = mongoose.model("Demande", DemandeSchema);
