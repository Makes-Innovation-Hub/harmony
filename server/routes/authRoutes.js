import express from "express";
import passport from "passport";
import "../middleware/AuthSetup.js";
import dotenv from "dotenv";
import logger from "../logger.js";

dotenv.config(); // Load environment variables

const router = express.Router();

// Authentication routes for Google, Facebook, and Apple
const providers = [
  { route: "google", scope: ["profile", "email"] },
  { route: "facebook", scope: ["email"] },
  { route: "apple" },
];

const BASE_SERVER_URL = process.env.BASE_SERVER_URL;
const CLIENT_PORT = process.env.CLIENT_PORT;

const FULL_SERVER_URL = `${BASE_SERVER_URL}:${CLIENT_PORT}`;
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
  if (req.isAuthenticated()) {
    res.json({
      isAuthenticated: true,
      user: req.user ? { id: req.user.id, name: req.user.name } : null,
    });
  } else {
    res.status(401).json({ isAuthenticated: false });
  }
});

export default router;
