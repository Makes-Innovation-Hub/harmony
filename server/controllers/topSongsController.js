import asyncHandler from "../middleware/asyncHandler.js";
import TopSongs from "../models/TopSongs.js";
import ErrorResponse from "../utils/ErrorResponse.js";
import createSongOrArtistObject from "../utils/controllersUtils.js";
import scrapeTopArabicSongs from "../scrapping/scrappingTopArabicSongs.js";
import scrapeTopHebrewSongs from "../scrapping/scrappingTopHebrewSongs.js";

import { getOrCreateSongAndReturn } from "./songsController.js";
import { dummySongsArray } from "../utils/dummySongResults.js";

const createTopSongsArray = async (scrapingFunction) => {
    const scrapedTopArabicSongs = JSON.parse(await scrapingFunction())

    //scrapedTopArabicSongs should be translated and massaged, to get an array of top songs. Each song should be an object with the exact structure and information in the model (Song.js)
    const massagedResults = dummySongsArray

    const createdSongsArray = []
   for (const result of massagedResults){
    const song = await getOrCreateSongAndReturn(result)
    createdSongsArray.push(song)
   }
   return createdSongsArray
  };

// @desc    Create top songs
//@route    GET /api/v1/harmony/topSongs
// @access  Public

const 