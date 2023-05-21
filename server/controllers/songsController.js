import asyncHandler from "../middleware/asyncHandler.js";
import Song from "../models/Song.js";
import ErrorResponse from "../utils/ErrorResponse.js";
import createSongOrArtistObject from "../utils/songsControllerUtils.js";

const findSong = (async (req) => {
    const filter = createSongOrArtistObject(req.body)
    const song = await Song.findOne(filter);
    if (song) return song
  });

// const getOrCreateSong = async(req) => {
//     const song = findSong(req)
//     if (!song){

//     //find artist by name to find artist id. If non-existent create new

//     //Add a function here that scrapes the song and returns the information bellow (name, lyrics...) in one object
//     // const scrapedData = scrapeSongData(req.body)
//     const newSongObject = createNewSongObject(scrapedData)

//     const newSong = await Song.create(newSongObject);
//     return newSong
//     }
//     return song
//   }

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

// @desc    Create a Song if non-existent
// @route   POST /api/v1/harmony/songs
// @access  dev
const createSong = asyncHandler(async (req, res, next) => {

  //find artist by name to find artist id. If non-existent create new

    //Add a function here that scrapes the song, translates it and returns the information bellow (name, lyrics...) in one object
    // const data =  scrapeAndTranslateSong(req.body)
    const newSongObject = createSongOrArtistObject(data)

    const song = await Song.create(newSongObject);
    if (!song) {
      return next(new ErrorResponse(`Server error, song not created! Song data: ${newSongObject}`));
    }
    res.status(200).json({
      success: true,
      data: song,
    });
  });


  export {getSong, createSong}