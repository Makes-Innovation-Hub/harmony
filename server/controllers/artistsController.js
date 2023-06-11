import asyncHandler from "../middleware/asyncHandler.js";
import Artist from "../models/Artist.js";
import logger from "../logger.js";
import ErrorResponse from "../utils/ErrorResponse.js";
import createObjectFromQuery from "../utils/createObjectFromQuery.js";
import { createDummyArtist } from "../utils/createDummyData.js";

const findArtist = async (req) => {
  logger.info(`start findArtist function`);
  const filter = createObjectFromQuery(req.body);
  logger.info(`artist filtered to find is ${filter}`);
  const artistArray = await Artist.find(filter).populate("songs");
  if (artistArray.length > 0) {
    logger.info(`artist found successfully: ${artistArray}`);
    return artistArray;
  }
};

const findOrCreateArtist = async (name, album) => {
  logger.info(
    `findOrCreateArtist with singer name: ${name} and album: ${album}`
  );
  const artistsArray = await findArtist({ body: { name: { english: name } } });
  if (artistsArray) {
    //Making sure the found artist has an album that matches the album name of the song
    const searchedArtist = artistsArray.find((artist) => {
      const lowerCasedAlbums = artist.albums.map((album) =>
        album.toLowerCase()
      );
      logger.info(
        `findOrCreateArtist with album in lower case: ${lowerCasedAlbums}`
      );
      return lowerCasedAlbums.includes(album);
    });
    if (searchedArtist) return searchedArtist;
  }
  //Add a function here that scrapes the artist's data (name, albums, image...), translates it and returns it in one object. This function is activated from the songsController, make sure that the searched song (in the activating function) is somewhere in the artist's data, to double check it's the right one.
  const data = createDummyArtist(name, album);
  logger.info(`start findOrCreateArtist with data ${name} and album: ${album}`);
  const newArtistObject = createObjectFromQuery(data);
  const newArtist = await Artist.create(newArtistObject);
  logger.info(
    `findOrCreateArtist with artist data: ${JSON.stringify(newArtist)} Created`
  );
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
//! This function is might create the wrong artist, if the artist's data is not unique
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

export { getArtists, createArtist, findOrCreateArtist as getOrCreateArtist };
