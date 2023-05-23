import asyncHandler from "../middleware/asyncHandler.js";
import TopSongs from "../models/TopSongs.js";
import ErrorResponse from "../utils/ErrorResponse.js";
import scrapeTopArabicSongs from "../scrapping/scrappingTopArabicSongs.js";
import scrapeTopHebrewSongs from "../scrapping/scrappingTopHebrewSongs.js";
import { findOrCreateSong } from "./songsController.js";
import { dummySongsArray } from "../utils/createDummyData.js";
import createObjectFromQuery from "../utils/createObjectFromQuery.js";
import checkIfAWeekPassed from "../utils/checkIfAWeekPassed.js";

const getOrCreateEachSong = async (language) => {
      let scrapedTopSongs
  if (language === 'hebrew'){
      // scrapedTopSongs = JSON.parse(await scrapeTopHebrewSongs())
  }
  if (language === 'arabic'){
      // scrapedTopSongs = JSON.parse(await scrapeTopArabicSongs())
  }
  //scrapedTopArabicSongs should be translated and massaged, to get an array of top songs. Each song should be an object with the exact structure and information in the model (Song.js)
  const massagedResults = dummySongsArray

  const createdSongsIdArray = []

  for (const result of massagedResults){
  const song = await findOrCreateSong({body: result})
  const songId = song._id
  createdSongsIdArray.push(songId)
  }
  return createdSongsIdArray
};

const findTopSongs = async() =>{
  const topSongsArray = await TopSongs.find().populate('songs')
  if(topSongsArray.length > 0) return topSongsArray
}



// @desc    Create top songs
//@route    POST /api/v1/harmony/topSongs
// @access  Public
const createTopSongs = asyncHandler(async (req, res, next) => {
  const {language, date} = req.body
  const isMoreThanAWeek = checkIfAWeekPassed(date)
  let topSongs

  if (date !== undefined){
    if (!isMoreThanAWeek) {
        const topSongsArray = await findTopSongs()
        if (!topSongsArray) {
        return next(new ErrorResponse(`Top songs not found`), 404);
      }
      topSongs = topSongsArray[topSongsArray.length - 1]
    } 
  }

  if (date === undefined || date !== undefined && isMoreThanAWeek){
      const songsIdArray = await getOrCreateEachSong(language)
      if (!songsIdArray) {
        return next(new ErrorResponse(`Error while getting or creating top songs from scraped data`));
      }
      topSongs = await TopSongs.create({language, songs: songsIdArray})
      if (!topSongs) {
        return next(new ErrorResponse(`Error while creating topSongs`));
    }
  }
  res.status(200).json({
    success: true,
    data: topSongs,
  });
});

// @desc    get all top songs
//@route    GET /api/v1/harmony/topSongs
// @access  Public
const getTopSongs = asyncHandler(async (req, res, next) => {
  
  const topSongs = await findTopSongs()
  if (!topSongs) {
    return next(new ErrorResponse(`Top songs not found`), 404);
  }
  res.status(200).json({
    success: true,
    data: topSongs,
  });
});

export {getTopSongs, createTopSongs}