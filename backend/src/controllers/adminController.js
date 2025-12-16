import { Order } from "../models/Order.js";
import { User } from "../models/User.js";
import { Book } from "../models/Book.js";

export async function adminSummary(_req, res) {
  const [orders, users, books] = await Promise.all([
    Order.countDocuments(),
    User.countDocuments(),
    Book.countDocuments(),
  ]);

  const latestOrders = await Order.find().sort({ createdAt: -1 }).limit(5).populate("user", "name");

  return res.json({ stats: { orders, users, books }, latestOrders });
}
