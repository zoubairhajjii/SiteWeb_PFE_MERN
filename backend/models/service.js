const mongoose = require("mongoose");

const ServiceSchema = mongoose.Schema({
  category: { type: String, required: true },
  nom_de_fournisseur: String,
  DescriptionService: { type: String, required: true },
  imageService: { type: String,required: true   },
  price:{type:String,required:true},
  localisation: String,
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "UserSchema",
  },
});

module.exports = mongoose.model("Service", ServiceSchema);