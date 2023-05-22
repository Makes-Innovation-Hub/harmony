import asyncHandler from "../middleware/asyncHandler.js";
import Artist from "../models/Artist.js";
import ErrorResponse from "../utils/ErrorResponse.js";
import createSongOrArtistObject from "../utils/controllersUtils.js";

const findArtist = (async (req) => {
    const filter = createSearchFilterObject(req.body)
    const artistArray = await Artist.find(filter).populate('songs');
    if (artistArray.length > 0) return artistArray
  });

const getOrCreateArtist = async(name, album) => {
    const artistsArray = findArtist({body: {name}})
    if (!artistsArray){
    //Add a function here that scrapes the artist's data (name, albums, image...) and returns it in one object. This function is activated from the songsController, make sure that the searched song (in the activating function) is somewhere in the artist's data, to double check it's the right one.
    // const data = scrapeArtistData(req.body)
    const newArtistObject = createSongOrArtistObject(data)

    const newArtist = await Artist.create(newArtistObject);
    return newArtist
    } 
    const searchedArtist = artistsArray.find((artist)=> artist.albums.toLowerCase().includes(album.toLowerCase()))
    return searchedArtist
    
  }

// @desc    Get artists by name
//@route    GET /api/v1/harmony/artists
// @access  Public
const getArtists = asyncHandler(async (req, res, next) => {
    const artistsArray = await findArtist(req)
    if (!artistsArray) {
      return next(
        new ErrorResponse(
          `Artist not found`,
          404
        )
      );
    }
    res.status(200).json({
      success: true,
      data: artistsArray,
    });
  });

// @desc    Create an Artist (only after check that is non-existent)
// @route   POST /api/v1/harmony/artists
// @access  dev
const createArtist= asyncHandler(async (req, res, next) => {

  const newArtistObject = createSongOrArtistObject(data)

  const song = await Song.create(newArtistObject);
  if (!song) {
    return next(new ErrorResponse(`Server error, song not created! Song data: ${newArtistObject}`));
  }
  res.status(200).json({
    success: true,
    data: song,
  });
});

  


  export {getArtists, createArtist, getOrCreateArtist}