const mongoose = require("mongoose");

const FeedbackSchema = mongoose.Schema({
  note: String,
  commentaire: String,
  
  DemId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "DemandeSchema",
  },
});

module.exports = mongoose.model("Feedback", FeedbackSchema);
