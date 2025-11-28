const mongoose = require("mongoose");

const tripSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: Number, required: true },
  message: { type: String, required: true },
});

const tripModel = mongoose.model("trip", tripSchema, "trip");

module.exports = { tripModel };
