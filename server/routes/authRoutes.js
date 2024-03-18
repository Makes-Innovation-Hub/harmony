import express from "express";
import passport from "passport";
import "../middleware/AuthSetup.js";
import dotenv from "dotenv";
import logger from "../logger.js";
import { clientUrl } from "../utils/urls.js";

dotenv.config(); // Load environment variables

const router = express.Router();

// Authentication routes for Google, Facebook, and Apple
const providers = [
  { route: "google", scope: ["profile", "email"] },
  { route: "facebook", scope: ["email"] },
  { route: "apple" },
];

const FULL_SERVER_URL = clientUrl;
logger.info(`The full server URL is: ${FULL_SERVER_URL}`);

providers.forEach(({ route, scope }) => {
  router.get(`/${route}`, passport.authenticate(route, { scope }));
  router.get(
    `/${route}/callback`,
    passport.authenticate(route, {
      successRedirect: FULL_SERVER_URL, // Ensure this is the correct URL where you want to redirect after success
      failureRedirect: "/login", // Adjust if needed
    })
  );
});

// verify route
router.get("/verify-session", (req, res) => {
  try {
    if (req.isAuthenticated()) {
      res.json({
        isAuthenticated: true,
        user: req.user
          ? { id: req.user.id, name: req.user.name, avatar: req.user.avatar }
          : null,
      });
    } else {
      res.status(401).json({ isAuthenticated: false });
    }
  } catch (error) {
    res.status(401).json({ isAuthenticated: false });
  }
});

export default router;
