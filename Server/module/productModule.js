const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  image: { type: String, require: true },
  category: { type: String, require: true },
  new_price: { type: Number, require: true },
  old_price: { type: Number, require: true },
  date: { type: Date, default: Date.now() },
  available: { type: Boolean, default: true },
});

module.exports = mongoose.model("ProductModule", productSchema);
