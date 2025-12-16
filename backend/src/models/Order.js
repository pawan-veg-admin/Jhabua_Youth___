import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    items: [
      {
        book: { type: mongoose.Schema.Types.ObjectId, ref: "Book" },
        quantity: { type: Number, default: 1 },
        price: Number,
      },
    ],
    total: Number,
    paymentStatus: { type: String, enum: ["pending", "paid", "failed"], default: "pending" },
    razorpayOrderId: String,
    razorpayPaymentId: String,
    status: { type: String, enum: ["processing", "shipped", "delivered"], default: "processing" },
  },
  { timestamps: true }
);

export const Order = mongoose.model("Order", orderSchema);
