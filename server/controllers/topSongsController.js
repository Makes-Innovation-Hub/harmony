import asyncHandler from "../middleware/asyncHandler.js";
import TopSongs from "../models/TopSongs.js";
import logger from "../logger.js";
import ErrorResponse from "../utils/ErrorResponse.js";
import scrapeTopArabicSongs from "../scrapping/scrappingTopArabicSongs.js";
import scrapeTopHebrewSongs from "../scrapping/scrappingTopHebrewSongs.js";
import { findOrCreateSong } from "./songsController.js";
import { dummySongsArray } from "../utils/createDummyData.js";
import createObjectFromQuery from "../utils/createObjectFromQuery.js";
import checkIfAWeekPassed from "../utils/checkIfAWeekPassed.js";
import { getCoverArtForSong } from "../spotifyapi.js";
import { all } from "axios";

const getOrCreateEachSong = async (language, topSongsArray) => {
  let massagedResults;
  if (language === "arabic") {
    massagedResults = topSongsArray.map((song) => {
      return {
        name: { english: song.song },
        artist: song.artist,
        coverArt: song.coverArt,
      };
    });
  }
  const createdSongsIdArray = [];

  for (const result of massagedResults) {
    console.log(result);
    const song = await findOrCreateSong({ body: result });
    console.log(song, "song ❤️");
    const songId = song._id;
    createdSongsIdArray.push(songId);
  }
  logger.info("Songs ID Array Created");
  return createdSongsIdArray;
};

const getOrCreateTopSongsBothLangs = async () => {
  const [hebrewTop, arabicTop] = await Promise.all([
    getOrCreateEachSong("hebrew"),
    getOrCreateEachSong("arabic"),
  ]);
  logger.info("Hebrew Top Song & Arabic Top Song created successfully");
  return { hebrewTop, arabicTop };
};

const createTopSongsInDB = async (language, topSongsIdArray) => {
  logger.info(
    `createTopSongsInDB with language ${language} and ID: ${topSongsIdArray}`
  );
  const topSongs = (
    await TopSongs.create({ language, songs: topSongsIdArray })
  ).populate("songs");
  logger.info("Top Song Created successfully In MongoDB");
  return topSongs;
};

const findTopSongs = async () => {
  const topSongsArray = await TopSongs.find().populate("songs");
  logger.info(`findTopSongs found with song details: ${topSongsArray}`);
  if (topSongsArray.length > 0) return topSongsArray;
};

const getCoverArtForTopSongs = async (scrapedTopSongs) => {
  const songs = [];
  for (const song of scrapedTopSongs) {
    const coverArtResult = await getCoverArtForSong(song.song, song.artist);
    logger.info(
      `cover art found for song name: ${song.song} and artist name: ${song.artist}`
    );
    song.coverArt = coverArtResult;
    songs.push(song);
  }
  return songs;
};

// @desc    get all top songs
//@route    GET /api/v1/harmony/topSongs
// @access  Public
const getTopSongs = asyncHandler(async (req, res, next) => {
  const topSongs = await findTopSongs();
  if (!topSongs) {
    return next(new ErrorResponse(`Top songs not found`), 404);
  }
  logger.info(`getTopSongs done successfully for: ${JSON.stringify(topSongs)}`);

  res.status(200).json({
    success: true,
    data: topSongs,
  });
});

// @desc    Create top songs
//@route    POST /api/v1/harmony/topSongs
// @access  Public
const createTopSongs = asyncHandler(async (req, res, next) => {
  const { date } = req.body;
  logger.info(`createSong with song details: ${JSON.stringify(date)}`);

  let topSongs;
  let isMoreThanAWeek;

  if (date !== undefined) {
    isMoreThanAWeek = checkIfAWeekPassed(date);
    if (!isMoreThanAWeek) {
      const topSongsArray = await findTopSongs();
      if (!topSongsArray) {
        return next(new ErrorResponse(`Top songs not found`), 404);
      }
      topSongs = topSongsArray[topSongsArray.length - 1];
    }
  }
  if (date === undefined || (date !== undefined && isMoreThanAWeek)) {
    const results = await getOrCreateTopSongsBothLangs();
    logger.info(`getOrCreateTopSongsBothLangs with data: ${results} sent`);
    if (!results) {
      return next(
        new ErrorResponse(
          `Error while getting or creating top songs from scraped data`
        )
      );
    }
    const arabicTopSongs = await createTopSongsInDB(
      "arabic",
      results.arabicTop
    );
    if (!arabicTopSongs) {
      return next(new ErrorResponse(`Error while creating Arabic topSongs`));
    }
    const hebrewTopSongs = await createTopSongsInDB(
      "hebrew",
      results.hebrewTop
    );
    if (!hebrewTopSongs) {
      return next(new ErrorResponse(`Error while creating Hebrew topSongs`));
    }
    topSongs = { arabicTopSongs, hebrewTopSongs };
  }

  res.status(200).json({
    success: true,
    data: topSongs,
  });
  logger.info("Top Song Created successfully");
});

const CreateTopSongsOnStart = asyncHandler(async (req, res, next) => {
  logger.info(`createTopSongsOnStart initiating `);

  let topSongs = [];
  let isMoreThanAWeek;

  const topSongsArray = await findTopSongs();
  if (!topSongsArray) {
    return next(new ErrorResponse(`Top songs not found`), 404);
  }
  topSongsArray.sort((a, b) => b.date - a.date);
  const latestTopSongs = topSongsArray[0];
  isMoreThanAWeek = checkIfAWeekPassed(latestTopSongs.date);
  // if (!isMoreThanAWeek) {
  //   topSongs = latestTopSongs;
  // } else {
  const [arabicScrapedTop, hebrewScrapedTop] = await Promise.all([
    scrapeTopArabicSongs(),
    scrapeTopHebrewSongs(),
  ]);

  const [arabicTopWithImage, hebrewTopWithImage] = await Promise.all([
    getCoverArtForTopSongs(arabicScrapedTop),
    getCoverArtForTopSongs(hebrewScrapedTop),
  ]);

  topSongs = {
    arabicSongs: arabicTopWithImage,
    hebrewSongs: hebrewTopWithImage,
  };
  // }

  res.status(200).json({
    success: true,
    data: topSongs,
  });

  if (!isMoreThanAWeek) {
    //1. for each song: find or create song
    // const arabicSongsArray = await getOrCreateEachSong(
    //   "arabic",
    //   await topSongs.songs
    // );
    // if (!arabicSongsArray) {
    //   return next(
    //     new ErrorResponse(
    //       `Error while getting or creating top songs from scraped data`
    //     )
    //   );
    // }


    
    //2.Creating top songs document in DB
    const arabicTopSongs = await createTopSongsInDB("arabic", arabicTopWithImage);
    if (!arabicTopSongs) {
      return next(new ErrorResponse(`Error while creating Arabic topSongs`));
    }
    logger.info("Arabic Top Song Created successfully");
    const hebrewTopSongs = await createTopSongsInDB("arabic", hebrewTopWithImage);
    if (!hebrewTopSongs) {
      return next(new ErrorResponse(`Error while creating Hebrew topSongs`));
    }
    logger.info("Arabic Top Song Created successfully");
  }
});

export { getTopSongs, CreateTopSongsOnStart };
