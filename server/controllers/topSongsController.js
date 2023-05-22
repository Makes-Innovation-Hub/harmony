import asyncHandler from "../middleware/asyncHandler.js";
import TopSongs from "../models/TopSongs.js";
import ErrorResponse from "../utils/ErrorResponse.js";
import createSongOrArtistObject from "../utils/controllersUtils.js";
import scrapeTopArabicSongs from "../scrapping/scrappingTopArabicSongs.js";
import scrapeTopHebrewSongs from "../scrapping/scrappingTopHebrewSongs.js";

import { findSong, getOrCreateSongAndReturn } from "./songsController.js";

// @desc    Get songs by name/artist/album
//@route    GET /api/v1/harmony/songs
// @access  Public
const getTopArabic = asyncHandler(async (req, res, next) => {
    const scrapedTopSongs = JSON.parse(scrapeTopArabicSongs())

    //The results should be massaged here, to get an array of top songs, and each song should be an object with the exact structure and information in the model (Song.js)
    const dummyResults = []

    const songsArray = await getOrCreateSongAndReturn(req)
  });