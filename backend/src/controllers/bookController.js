import { Book } from "../models/Book.js";

export async function listBooks(req, res) {
  const { search = "", category } = req.query;
  const query = {
    ...(category ? { category } : {}),
    title: { $regex: search, $options: "i" },
  };
  const results = await Book.find(query).limit(50).sort({ createdAt: -1 });
  return res.json(results);
}

export async function createBook(req, res) {
  const book = await Book.create(req.body);
  return res.status(201).json(book);
}

export async function updateBook(req, res) {
  const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
  return res.json(book);
}

export async function deleteBook(req, res) {
  await Book.findByIdAndDelete(req.params.id);
  return res.status(204).send();
}
