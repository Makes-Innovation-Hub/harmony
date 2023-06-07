import asyncHandler from "../middleware/asyncHandler.js";
import Song from "../models/Song.js";
import logger from "../logger.js";
import ErrorResponse from "../utils/ErrorResponse.js";
import createObjectFromQuery from "../utils/createObjectFromQuery.js";
import { getOrCreateArtist } from "./artistsController.js";
import { createDummySong } from "../utils/createDummyData.js";

const findSong = async (req) => {
  const filter = createObjectFromQuery(req.body);
  const songsArray = await Song.find(filter).populate("artist");
  if (songsArray.length > 0) return songsArray;
};

const createSongInDB = async (req) => {
  const newSongObject = createObjectFromQuery(req.body);

  //Add a function here that scrapes the song, translates it and returns the information bellow (name, lyrics, album...) in one object.
  const dummySong = createDummySong(newSongObject);
  const data = dummySong;

  //Finding the artist using the song data (cross-referencing with artist name and the album of the song)
  const artistName = data.artistName;
  const album = data.album;
  const artist = await getOrCreateArtist(artistName, album);

  const song = await Song.create({ ...data, artist: artist._id });

  return song;
};

const findOrCreateSong = async (req) => {
  const songsArray = await findSong(req);
  if (!songsArray) {
    const song = await createSongInDB(req);
    return song;
  }
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
  if (!song) {
    return next(new ErrorResponse(`Error while creating song`));
  }
  res.status(200).json({
    success: true,
    data: song,
  });
});

export { getSongs, createSong, findSong, findOrCreateSong };
