const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productName: { type: String, required: true },
  vegOrNonVeg: { type: String, required: true, enum: ["veg", "non-veg"] },
  price: { type: Number, required: true },
  rating: { type: Number, required: true },
  imageUrl: { type: String, required: true },
  description: { type: String, required: true },
  bestSeller: { type: Boolean, default: false }
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
