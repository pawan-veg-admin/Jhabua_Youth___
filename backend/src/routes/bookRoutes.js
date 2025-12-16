import { Router } from "express";
import { createBook, deleteBook, listBooks, updateBook } from "../controllers/bookController.js";
import { protect, requireAdmin } from "../middleware/auth.js";

const router = Router();

router.get("/", listBooks);
router.post("/", protect, requireAdmin, createBook);
router.put("/:id", protect, requireAdmin, updateBook);
router.delete("/:id", protect, requireAdmin, deleteBook);

export default router;
