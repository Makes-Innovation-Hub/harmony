import asyncHandler from "../middleware/asyncHandler.js";
import Song from "../models/Song.js";
import ErrorResponse from "../utils/ErrorResponse.js";
import createSearchFilterObject from "../utils/createSearchFilterObject.js";

// @desc    Get a single song by name/artist/album
//! @route   GET /api/v1...
// @access  Public
const getSong = asyncHandler(async (req, res, next) => {

    const filter = createSearchFilterObject(req)

    const song = await Song.findOne(filter);
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

  

  export {getSong}