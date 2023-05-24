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

const getOrCreateTopSongsBothLangs = async() =>{
  const hebrewTop = await getOrCreateEachSong('hebrew')
  const arabicTop = await getOrCreateEachSong('arabic')
  return {hebrewTop, arabicTop}
}

const createTopSongsInDB = async(language, topSongsIdArray) => {
  const topSongs = (await TopSongs.create({language, songs: topSongsIdArray})).populate('songs')
  return topSongs
}

const findTopSongs = async() =>{
  const topSongsArray = await TopSongs.find().populate('songs')
  if(topSongsArray.length > 0) return topSongsArray
}


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

// @desc    Create top songs
//@route    POST /api/v1/harmony/topSongs
// @access  Public
const createTopSongs = asyncHandler(async (req, res, next) => {
  const {date} = req.body
  let topSongs
  let isMoreThanAWeek
  
  if (date !== undefined){
    isMoreThanAWeek = checkIfAWeekPassed(date)
    if (!isMoreThanAWeek) {
        const topSongsArray = await findTopSongs()
        if (!topSongsArray) {
        return next(new ErrorResponse(`Top songs not found`), 404);
      }
      topSongs = topSongsArray[topSongsArray.length - 1]
    } 
  }
  if (date === undefined || date !== undefined && isMoreThanAWeek){

      const results = await getOrCreateTopSongsBothLangs()
      if (!results) {
        return next(new ErrorResponse(`Error while getting or creating top songs from scraped data`));
      }
      const arabicTopSongs = await createTopSongsInDB('arabic', results.arabicTop)
      if (!arabicTopSongs){
        return next(new ErrorResponse(`Error while creating Arabic topSongs`))
      }
      const hebrewTopSongs = await createTopSongsInDB('hebrew', results.hebrewTop)
      if (!hebrewTopSongs){
        return next(new ErrorResponse(`Error while creating Hebrew topSongs`))
      }
      topSongs = {arabicTopSongs, hebrewTopSongs }
  }

  res.status(200).json({
    success: true,
    data: topSongs,
  });
});

export {getTopSongs, createTopSongs}