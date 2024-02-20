import express from "express";
import { verifyToken } from "../controllers/authController.js";

const router = express.Router();

// Route for handling authentication and user creation/lookup
router.post("/google", verifyToken);

export default router;
