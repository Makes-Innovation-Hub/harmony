import express from "express";
import scrapeTopArabicSongs from "../scrapping/scrappingTopArabicSongs.js";
import scrapeTopHebrewSongs from "../scrapping/scrappingTopHebrewSongs.js";

const router = express.Router();


router.route("/topArabicSongs").get(scrapeTopArabicSongs)
router.route("/topHebrewSongs").get(scrapeTopHebrewSongs);

export default router;



