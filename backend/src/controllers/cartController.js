import { Order } from "../models/Order.js";
import { createRazorpayOrder } from "../utils/razorpay.js";

export async function createCheckoutSession(req, res) {
  const { items, total } = req.body;
  const razorpayOrder = await createRazorpayOrder(total, `order_${Date.now()}`);
  const order = await Order.create({
    user: req.user._id,
    items,
    total,
    paymentStatus: "pending",
    razorpayOrderId: razorpayOrder.id,
  });
  return res.status(201).json({ order, razorpay: razorpayOrder });
}

export async function handleWebhook(req, res) {
  // Wire Razorpay signature verification and payment capture here.
  return res.json({ received: true });
}
