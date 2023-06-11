import express from "express";
import { fetchLyrics } from "../genuisLyrics.js";
const router = express.Router();

router.get("/:searchTerm", async (req, res) => {
  const searchTerm = req.params.searchTerm;
  const lyrics = await fetchLyrics(searchTerm);

  if (lyrics) {
    res.status(200).json({ lyrics });
  } else {
    res.status(404).json({ message: "Lyrics not found" });
  }
});

export default router;
