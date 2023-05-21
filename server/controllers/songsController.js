import asyncHandler from "../middleware/asyncHandler.js";
import Song from "../models/Song.js";
import ErrorResponse from "../utils/ErrorResponse.js";
import createSearchFilterObject from "../utils/createSearchFilterObject.js";

const findSong = (async (req) => {
    const filter = createSearchFilterObject(req)
    const song = await Song.findOne(filter);
    if (song) return song
  });

// @desc    Get a single song by name/artist/album
//@route    GET /api/v1/harmony/songs
// @access  Public
const getSong = asyncHandler(async (req, res, next) => {
    const song = await findSong(req)
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

// @desc    Create a Song
// @route   POST /api/v1/harmony/songs
// @access  dev
export const createSong = asyncHandler(async (req, res, next) => {
    const { name, originalLang, lyrics, artist } = req.body;

    //find artist by name to find artist id. If non-existent create new
    //Add a function here that scrapes the song and returns the information bellow (name, lyrics...)
  
    const song = await Song.create({
      name: {hebrew: name.hebrew, arabic:name.arabic, english:name.english.toLowerCase()},
      lyrics: {hebrew: lyrics.hebrew, arabic:lyrics.arabic, english:lyrics.english},
      originalLang,
      artist
    });
    if (!song) {
      return next(new ErrorResponse("Server error, song not created!"));
    }
    res.status(200).json({
      success: true,
      data: song,
    });
  });



  export {getSong, createSong, findSong}