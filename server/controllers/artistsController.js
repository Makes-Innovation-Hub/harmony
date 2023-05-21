import asyncHandler from "../middleware/asyncHandler.js";
import Artist from "../models/Artist.js";
import ErrorResponse from "../utils/ErrorResponse.js";
import createSongOrArtistObject from "../utils/controllersUtils.js";

const findArtist = (async (req) => {
    const filter = createSearchFilterObject(req.body)
    const artist = await Artist.findOne(filter);
    if (artist) return artist
  });

const getOrCreateArtist = async(req) => {
    const artist = findArtist(req)
    if (!artist){
    //Add a function here that scrapes the artist's data (name, albums, image...) and returns it in one object
    // const data = scrapeArtistData(req.body)
    const newArtistObject = createSongOrArtistObject(data)

    const newArtist = await Artist.create(newArtistObject);
    return newArtist
    }
    return artist
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

    const song = await getOrCreateArtist(req)
    if (!song) {
      return next(new ErrorResponse(`Server error, song not created!`));
    }
    res.status(200).json({
      success: true,
      data: song,
    });
  });

  


  export {getSong, createSong, getOrCreateArtist}