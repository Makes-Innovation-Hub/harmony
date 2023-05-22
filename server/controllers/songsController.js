import asyncHandler from "../middleware/asyncHandler.js";
import Song from "../models/Song.js";
import ErrorResponse from "../utils/ErrorResponse.js";
import createSongOrArtistObject from "../utils/controllersUtils.js";
import { getOrCreateArtist } from "./artistsController.js";
import { dummySong } from "../utils/dummySongsAndArtists.js";

const findSong = (async (req) => {
    const filter = createSongOrArtistObject(req.body)
    const songsArray = await Song.find(filter).populate('artist');
    if (songsArray.length > 0) return songsArray
  });

const createSongAndReturn = async(req) => {
  //Add a function here that scrapes the song, translates it and returns the information bellow (name, lyrics, album...) in one object.
  const data = dummySong

  //Finding the artist using the song data (cross-referencing with artist name and the album of the song)
  const artistName = data.name.toLowerCase()
  const album = data.album.toLowerCase()
  const artist = getOrCreateArtist(artistName, album)

  const newSongObject = createSongOrArtistObject(data)

  const song = await Song.create({...newSongObject, artist: artist._id});
  
  return song
}

const getOrCreateSongAndReturn = async(req) =>{
  const songsArray = await findSong(req)
  if (!songsArray){
    const song = await createSongAndReturn(req)
    return song
  }
  return songsArray[0]
}

// @desc    Get songs by name/artist/album
//@route    GET /api/v1/harmony/songs
// @access  Public
const getSongs = asyncHandler(async (req, res, next) => {
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

// @desc    Create a Song (only after check that is non-existent with getSongs)
// @route   POST /api/v1/harmony/songs
// @access  dev
const createSong = asyncHandler(async (req, res, next) => {

    const song = await createSongAndReturn(req)
    if (!song) {
      return next(new ErrorResponse(`Error while creating song`));
    }
    res.status(200).json({
      success: true,
      data: song,
    });
  });

  export {getSongs, createSong, findSong, getOrCreateSongAndReturn}