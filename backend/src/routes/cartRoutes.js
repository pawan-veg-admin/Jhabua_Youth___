import { Router } from "express";
import { createCheckoutSession, handleWebhook } from "../controllers/cartController.js";
import { protect } from "../middleware/auth.js";

const router = Router();

router.post("/checkout", protect, createCheckoutSession);
router.post("/webhook", handleWebhook);

export default router;
