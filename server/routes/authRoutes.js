import express from "express";
import passport from "passport";
import "../middleware/AuthSetup.js";

const router = express.Router();

// Authentication routes for Google, Facebook, and Apple
const providers = [
  { route: "google", scope: ["profile", "email"] },
  { route: "facebook", scope: ["email"] },
  { route: "apple" },
];

providers.forEach(({ route, scope }) => {
  router.get(`/${route}`, passport.authenticate(route, { scope }));
  router.get(
    `/${route}/callback`,
    passport.authenticate(route, {
      successRedirect: "http://localhost:5173/",
      failureRedirect: "/login",
    })
  );
});

// verify route
router.get("/verify-session", (req, res) => {
  console.log(req.user);
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
