const mongoose = require("mongoose");

const schemaProduct = new mongoose.Schema({
  timestamp: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  thumbnail: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
});

const Productos = mongoose.model("Productos", schemaProduct);
module.exports = { Productos, schemaProduct };
