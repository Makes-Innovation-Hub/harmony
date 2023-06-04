import express from "express";
import scrapeTopArabicSongs from "../scrapping/scrappingTopArabicSongs.js";
import scrapeTopHebrewSongs from "../scrapping/scrappingTopHebrewSongs.js";
import scrapeTopArabicSongsLyrics from "../scrapping/scrappingTopArabicSongsLyrics.js";

const router = express.Router();

router.route("/topArabicSongs").get(scrapeTopArabicSongs);
router.route("/topHebrewSongs").get(scrapeTopHebrewSongs);
router.route("/topArabicSongsLyrics").post(scrapeTopArabicSongsLyrics);

export default router;
