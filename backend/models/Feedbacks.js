const mongoose = require("mongoose");

const FeedbackSchema = mongoose.Schema({
  note: String,
  commentaire: String,
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "UserSchema",
    required: true,
  },
  DemId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "DemandeSchema",
  },
});

module.exports = mongoose.model("Feedback", FeedbackSchema);
