import asyncHandler from "../middleware/asyncHandler.js";
import TopSongs from "../models/TopSongs.js";
import logger from "../logger.js";
import ErrorResponse from "../utils/ErrorResponse.js";
import scrapeTopArabicSongs from "../scrapping/scrappingTopArabicSongs.js";
import scrapeTopHebrewSongs from "../scrapping/scrappingTopHebrewSongs.js";
import { findOrCreateSong } from "./songsController.js";
import checkIfInSameWeek from "../utils/checkIfAWeekPassed.js";
import { getCoverArtForSong } from "../spotifyapi.js";

// .........................getOrCreateEachSong..............................................
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
    logger.info(`finding or creating song for: ${result}`);
    const song = await findOrCreateSong({ body: result });
    logger.info(`sing found or created for song: ${song}`);
    const songId = song._id;
    createdSongsIdArray.push(songId);
  }
  logger.info("Songs ID Array Created");
  return createdSongsIdArray;
};
// ............................................................................................

// .........................getOrCreateTopSongsBothLangs.......................................
const getOrCreateTopSongsBothLangs = async () => {
  const [hebrewTop, arabicTop] = await Promise.all([
    getOrCreateEachSong("hebrew"),
    getOrCreateEachSong("arabic"),
  ]);
  logger.info("Hebrew Top Song & Arabic Top Song created successfully");
  return { hebrewTop, arabicTop };
};
// ............................................................................................

// .....................getTopSongs............................................................
const getTopSongs = asyncHandler(async (req, res, next) => {
  logger.info(`createTopSongsOnStart initiating `);
  let topSongs = {
    arabicSongs: "",
    hebrewSongs: "",
  };
  try {
    const topSongsArray = await findTopSongs();
    if (!topSongsArray) {
      generateTopSongsData(res);
    } else {
      // check if a week has passed from last record
      const datesToCheck = {
        arabic: { date: "" },
        hebrew: { date: "" },
      };
      const currentDate = new Date();
      topSongsArray.forEach((topSong) => {
        datesToCheck[topSong.language].date = topSong.date;
        datesToCheck[topSong.language]["data"] = topSong.songs;
      });
      for (const lang in datesToCheck) {
        if (Object.hasOwnProperty.call(datesToCheck, lang)) {
          const date = datesToCheck[lang].date;
          if (checkIfInSameWeek(date, currentDate)) {
            const key = lang === "arabic" ? "arabicSongs" : "hebrewSongs";
            topSongs[key] = datesToCheck[lang]["data"];
          }
        }
      }
      // if not - send current records
      if (topSongs.arabicSongs && topSongs.hebrewSongs) {
        logger.info("found relevant data in db. sending");
        res.status(200).json({
          success: true,
          data: topSongs,
        });
      } else {
        // if yes - generate new data
        generateTopSongsData(res);
      }
    }
  } catch (error) {
    console.log("error", error);
  }
});

// ............................................................................................

// ...........................findTopSongs.....................................................
const findTopSongs = async () => {
  const topSongsArray = await TopSongs.find();
  logger.info(`findTopSongs found`);
  if (topSongsArray.length > 0) return topSongsArray;
};
// ............................................................................................

// ..........................generateTopSongsData..............................................
const generateTopSongsData = async (res) => {
  logger.info("no relevant data found in db. generating");
  const [arabicScrapedTop, hebrewScrapedTop] = await Promise.all([
    scrapeTopArabicSongs(),
    scrapeTopHebrewSongs(),
  ]);

  const [arabicTopWithImage, hebrewTopWithImage] = await Promise.all([
    getCoverArtForTopSongs(arabicScrapedTop),
    getCoverArtForTopSongs(hebrewScrapedTop),
  ]);
  const topSongs = {
    arabicSongs: arabicTopWithImage,
    hebrewSongs: hebrewTopWithImage,
  };
  logger.info("generated all relevant data. sending");
  res.status(200).json({
    success: true,
    data: topSongs,
  });
  logger.info("starting to save top song data in db");
  try {
    const arabicTopSongs = await createTopSongsInDB(
      "arabic",
      arabicTopWithImage.slice(0, 10)
    );
    if (!arabicTopSongs) {
      return next(new ErrorResponse(`Error while creating Arabic topSongs`));
    }
    logger.info("Arabic Top Song Created successfully");
    const hebrewTopSongs = await createTopSongsInDB(
      "hebrew",
      hebrewTopWithImage
    );
    if (!hebrewTopSongs) {
      return next(new ErrorResponse(`Error while creating Hebrew topSongs`));
    }
    logger.info("hebrew Top Song Created successfully");
  } catch (error) {
    console.log("error", error);
    logger.error(`error in creating Top Song ${error}`);
  }
};
// ............................................................................................

// ...........................getCoverArtForTopSongs...........................................
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
// ............................................................................................

// ...............................createTopSongsInDB...........................................
const createTopSongsInDB = async (language, topSongsIdArray) => {
  logger.info(
    `createTopSongsInDB with language ${language} and ID: ${topSongsIdArray}`
  );
  let topSongs = await TopSongs.create({ language, songs: topSongsIdArray });
  topSongs = await TopSongs.findById(topSongs._id);

  logger.info("Top Song Created successfully In MongoDB");
  return topSongs;
};
// ............................................................................................

export { getTopSongs };
