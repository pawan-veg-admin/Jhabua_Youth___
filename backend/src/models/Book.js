import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    price: { type: Number, required: true },
    category: String,
    rating: { type: Number, default: 0 },
    description: String,
    cover: String,
    stock: { type: Number, default: 10 },
    tags: [String],
  },
  { timestamps: true }
);

export const Book = mongoose.model("Book", bookSchema);
