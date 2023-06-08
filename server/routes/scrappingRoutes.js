import express from "express";
import scrapeTopArabicSongs from "../scrapping/scrappingTopArabicSongs.js";
import scrapeTopHebrewSongs from "../scrapping/scrappingTopHebrewSongs.js";
import scrapeTopArabicSongsLyrics from "../scrapping/scrappingTopArabicSongsLyrics.js";
import scrapeGoogleLyrics from "../scrapping/scrappingGoogleLyrics.js";

const router = express.Router();

router.route("/topArabicSongs").get(scrapeTopArabicSongs);
router.route("/topHebrewSongs").get(scrapeTopHebrewSongs);
router.route("/topArabicSongsLyrics").post(scrapeTopArabicSongsLyrics);
router.route("/googleLyrics").post(scrapeGoogleLyrics);

export default router;
