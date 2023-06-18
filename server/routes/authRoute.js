import express from "express";
import { generateToken, verifyToken } from "../controllers/authController.js";

const authRouter = express.Router();

// Endpoint to generate JWT token
authRouter.post("/token", generateToken);

// Protected endpoint that requires token verification
authRouter.get("/verify", verifyToken, (req, res) => {
  // Return success message if token is valid
  res.json({ message: "Token verified" });
});

export default authRouter;
