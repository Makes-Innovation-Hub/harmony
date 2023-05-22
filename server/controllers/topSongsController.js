import asyncHandler from "../middleware/asyncHandler.js";
import TopSongs from "../models/TopSongs.js";
import ErrorResponse from "../utils/ErrorResponse.js";
import createSongOrArtistObject from "../utils/controllersUtils.js";
import scrapeTopArabicSongs from "../scrapping/scrappingTopArabicSongs.js";
import scrapeTopHebrewSongs from "../scrapping/scrappingTopHebrewSongs.js";

import { getOrCreateSongAndReturn } from "./songsController.js";
import { dummySongsArray } from "../utils/dummySongResults.js";

const getTopSongs = async (scrapingFunction) => {
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

  // @desc    Get songs by name/artist/album
//@route    GET /api/v1/harmony/songs
// @access  Public