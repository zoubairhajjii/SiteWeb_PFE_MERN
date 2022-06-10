const mongoose = require("mongoose");

const ServiceSchema = mongoose.Schema({
  category: { type: String, required: true },
  DescriptionService: { type: String, required: true },
  image: { type: String,required: true   },
  localisation: String,
  userId: {
    type: mongoose.Schema.Types.ObjectId,
     ref: "User",
  },
});

module.exports = mongoose.model("Service", ServiceSchema);