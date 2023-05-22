import asyncHandler from "../middleware/asyncHandler.js";
import TopSongs from "../models/TopSongs.js";
import ErrorResponse from "../utils/ErrorResponse.js";
import createSongOrArtistObject from "../utils/controllersUtils.js";
import scrapeTopArabicSongs from "../scrapping/scrappingTopArabicSongs.js";
import scrapeTopHebrewSongs from "../scrapping/scrappingTopHebrewSongs.js";

import { findSong } from "./songsController.js";