import asyncHandler from "../middleware/asyncHandler.js";
import Artist from "../models/Artist.js";
import ErrorResponse from "../utils/ErrorResponse.js";
import { createSongOrArtistObject, createSearchFilterObject } from "../utils/songsControllerUtils.js";

const findArtist = (async (req) => {
    const filter = createSearchFilterObject(req)
    const song = await Song.findOne(filter);
    if (song) return song
  });

const getOrCreateSong = async(req) => {
    const song = findArtist(req)
    if (!song){

    //find artist by name to find artist id. If non-existent create new

    //Add a function here that scrapes the song and returns the information bellow (name, lyrics...) in one object
    // const scrapedData = scrapeSongData(req.body)
    const newSongObject = createSongOrArtistObject(scrapedData)

    const newSong = await Song.create(newSongObject);
    return newSong
    }
    return song
  }

// @desc    Get a single song by name/artist/album
//@route    GET /api/v1/harmony/songs
// @access  Public
const getSong = asyncHandler(async (req, res, next) => {
    const song = await findArtist(req)
    if (!song) {
      return next(
        new ErrorResponse(
          `song not found`,
          404
        )
      );
    }
    res.status(200).json({
      success: true,
      data: song,
    });
  });

// @desc    Create a Song if non-existent
// @route   POST /api/v1/harmony/songs
// @access  dev
const createSong = asyncHandler(async (req, res, next) => {

    const song = await getOrCreateSong(req)
    if (!song) {
      return next(new ErrorResponse(`Server error, song not created!`));
    }
    res.status(200).json({
      success: true,
      data: song,
    });
  });

  


  export {getSong, createSong}