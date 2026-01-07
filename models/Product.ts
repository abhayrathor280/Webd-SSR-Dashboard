import mongoose, { Schema, models, model } from "mongoose";

const ProductSchema = new Schema({
  name: String,
  price: Number,
  stock: Number,
  image: String,
});

const Product =
  models.Product || model("Product", ProductSchema);

export default Product;
