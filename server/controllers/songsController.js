import asyncHandler from "../middleware/asyncHandler.js";
import Song from "../models/Song.js";
import logger from "../logger.js";
import ErrorResponse from "../utils/ErrorResponse.js";
import createObjectFromQuery from "../utils/createObjectFromQuery.js";
import { findOrCreateArtist } from "./artistsController.js";
import { createDummySong } from "../utils/createDummyData.js";

const findSong = async (req) => {
  const filter = createObjectFromQuery(req.body);
  const songsArray = await Song.find(filter).populate("artist");
  if (songsArray.length > 0) return songsArray;
  logger.info(`findSong with song details ${songsArray} found successfully `);
};

const createSongInDB = async (req) => {
  const newSongObject = createObjectFromQuery(req.body);
  logger.info(
    `createSongInDB with song details ${JSON.stringify(newSongObject)}`
  );

  //add song lyrics and translations for names and lyrics. put the scraping function results here!
  const artist = await findOrCreateArtist(
    req.body.artist,
    req.body.name.english,
    req.body.coverArt
  );
  const song = await Song.create({
    name: {
      english: req.body.name.english,
      hebrew: "hard-coded heb",
      arabic: "hard-coded arabic",
    },
    lyrics: {
      english: "hard-coded eng",
      hebrew: "hard-coded heb",
      arabic: "hard-coded arabic",
    },
    coverArt: req.body.coverArt,
    artist: artist._id,
  });
  logger.info(
    `song created successfully with song details: ${JSON.stringify(song)}`
  );
  return song;
};

const findOrCreateSong = async (req) => {
  const songsArray = await findSong(req);
  logger.info(`findOrCreateSong for song arr: ${JSON.stringify(songsArray)}`);

  if (!songsArray) {
    const song = await createSongInDB(req);
    return song;
  }
  // logger.info(`findOrCreateSong successfully for: ${song}`);

  return songsArray[0];
};

// @desc    Get songs by name/artist/album
//@route    GET /api/v1/harmony/songs
// @access  Public
//Use the following structure to query (case insensitive):
// {
//     "name": {
//       "english": "song two"
//   }
// }
const getSongs = asyncHandler(async (req, res, next) => {
  const songsArray = await findSong(req);
  logger.info(`getSongs for song: ${JSON.stringify(songsArray)}`);

  if (!songsArray) {
    return next(new ErrorResponse(`Song not found`, 404));
  }
  res.status(200).json({
    success: true,
    data: songsArray,
  });
});

// @desc    Create a Song
// @route   POST /api/v1/harmony/songs
// @access  dev
const createSong = asyncHandler(async (req, res, next) => {
  const song = await createSongInDB(req);
  logger.info(`createSong with song details: ${JSON.stringify(song)}`);

  if (!song) {
    return next(new ErrorResponse(`Error while creating song`));
  }
  logger.info(
    `song created successfully with song details: ${JSON.stringify(song)}`
  );
  res.status(200).json({
    success: true,
    data: song,
  });
});

export { getSongs, createSong, findSong, findOrCreateSong };
