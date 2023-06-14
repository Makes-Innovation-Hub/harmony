import asyncHandler from "../middleware/asyncHandler.js";
import Artist from "../models/Artist.js";
import logger from "../logger.js";
import ErrorResponse from "../utils/ErrorResponse.js";
import createObjectFromQuery from "../utils/createObjectFromQuery.js";
import { createDummyArtist } from "../utils/createDummyData.js";

const findArtist = async (req) => {
  logger.info(`start findArtist function`);
  const filter = createObjectFromQuery(req.body);
  logger.info(`artist filtered to find is ${JSON.stringify(filter)}`);
  const artistArray = await Artist.find(filter).populate("songs");
  if (artistArray.length > 0) {
    logger.info(`artist found successfully: ${artistArray}`);
    return artistArray;
  }
};

const findOrCreateArtist = async (artistName, songName, coverArt) => {
  logger.info(`findOrCreateArtist with singer name: ${artistName}`);
  const artistsArray = await findArtist({
    body: { name: { english: artistName } },
  });
  if (artistsArray) {
    // Making sure the found artist has a song that matches the album name of the song
    const searchedArtist = artistsArray.find((artist) => {
      return artist.songs.find((song) => song.name.english === songName);
    });
    if (searchedArtist) return searchedArtist;
  }
  //Add a function that translates the artist's name and insert here as needed
  const newArtistObject = {
    name: {
      english: artistName,
      hebrew: "Hard coded hebrew",
      arabic: "hard coded arabic",
    },
    coverArt,
    albums: [],
  };
  const newArtist = await Artist.create(newArtistObject);
  logger.info(`Create artist with data: ${JSON.stringify(newArtist)} Created`);
  return newArtist;
};

// @desc    Get artists by name
//@route    GET /api/v1/harmony/artists
// @access  Public
//Use the following structure to query (case insensitive):
// {
//     "name": {
//       "hebrew": "אמן"
//   }
// }
const getArtists = asyncHandler(async (req, res, next) => {
  const artistsArray = await findArtist(req);
  if (!artistsArray) {
    return next(new ErrorResponse(`Artist not found`, 404));
  }
  logger.info(`getArtists with artistsArray: ${artistsArray} found`);
  res.status(200).json({
    success: true,
    data: artistsArray,
  });
});

// @desc    Create an Artist
// @route   POST /api/v1/harmony/artists
// @access  dev
const createArtist = asyncHandler(async (req, res, next) => {
  const newArtistObject = createObjectFromQuery(req.body);
  const artist = await Artist.create(newArtistObject);
  logger.info(
    `start creating artist with artist details: ${JSON.stringify(artist)}`
  );
  if (!artist) {
    return next(
      new ErrorResponse(
        `Error while creating artist. Artist data: ${newArtistObject}`
      )
    );
  }
  res.status(200).json({
    success: true,
    data: artist,
  });
  logger.info("Artist Created successfully");
});

export { getArtists, createArtist, findOrCreateArtist };
