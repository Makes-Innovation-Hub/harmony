import asyncHandler from "../middleware/asyncHandler.js";
import Song from "../models/Song.js";
import ErrorResponse from "../utils/ErrorResponse.js";
import createSongOrArtistObject from "../utils/controllersUtils.js";
import { getOrCreateArtist } from "./artistsController.js";

const findSong = (async (req) => {
    const filter = createSongOrArtistObject(req.body)
    const songsArray = await Song.find(filter).populate('artist');
    if (songsArray.length > 0) return songsArray
  });


// @desc    Get songs by name/artist/album
//@route    GET /api/v1/harmony/songs
// @access  Public
const getSong = asyncHandler(async (req, res, next) => {
    const songsArray = await findSong(req)
    if (!songsArray) {
      return next(
        new ErrorResponse(
          `song not found`,
          404
        )
      );
    }
    res.status(200).json({
      success: true,
      data: songsArray,
    });
  });

// @desc    Create a Song (only after check that is non-existent)
// @route   POST /api/v1/harmony/songs
// @access  dev
const createSong = asyncHandler(async (req, res, next) => {

    //Add a function here that scrapes the song, translates it and returns the information bellow (name, lyrics, album...) in one object
    // const data =  scrapeAndTranslateSong(req.body)

    //Finding the artist using the song data (cross-referencing with artist name and the album of the song)
    const artistName = data.artistName.toLowerCase()
    const album = data.album
    const artist = getOrCreateArtist(artistName, album)

    const newSongObject = createSongOrArtistObject(data)

    const song = await Song.create({...newSongObject, artist: artist._id});
    if (!song) {
      return next(new ErrorResponse(`Server error, song not created! Song data: ${newSongObject}`));
    }
    res.status(200).json({
      success: true,
      data: song,
    });
  });

  const getOrCreateSong = asyncHandler(async (req, res, next) => {
    const songsArray = findSong(req)

    if(!songsArray){
      
    }

  })


  export {getSong, createSong, findSong}