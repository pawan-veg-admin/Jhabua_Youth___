import { Router } from "express";
import { adminSummary } from "../controllers/adminController.js";
import { protect, requireAdmin } from "../middleware/auth.js";

const router = Router();

router.get("/summary", protect, requireAdmin, adminSummary);

export default router;
