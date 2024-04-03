import logger from "../logger.js";
import CoverSong from "../models/CoverSong.js";
import Song from "../models/Song.js";
import { isValidObjectId } from "mongoose";
import User from "../models/User.js";

// Commit Message:
// Implement CRUD Operations for CoverSongs

// Description:
// - `getDeleteAll`: Deletes all documents in the CoverSong collection.
// - `deleteCoverSongById`: Deletes a specific CoverSong document based on the provided ID.
// - `getAllCoverSongs`: Retrieves all CoverSongs from the database.
// - `postCoverData`: Handles the creation of a new CoverSong, checking for existing entries based on youtubeUrl and coverArtist to avoid duplicates.

// Note:
// - The code includes error handling and validation for invalid IDs and existing entries.
// - The commit addresses basic CRUD functionalities for the CoverSong model.

export const getDeleteAll = async (req, res, next) => {
  try {
    await CoverSong.deleteMany({});
    res.send("All delete data successfully");
  } catch (error) {
    next(error);
  }
};

export const deleteCoverSongById = async (req, res, next) => {
  try {
    const { id } = req.params;
    // check the id if valid
    if (!isValidObjectId(id)) {
      throw new Error("ID not Valid");
    }

    const deleteCover = await CoverSong.findById(id);

    if (!deleteCover) {
      res.status(404);
      throw new Error("Song Cover Not Found");
    } else {
      await CoverSong.deleteOne(deleteCover);
      logger.info(
        `Cover song with the artist name of ${deleteCover.coverArtist} has been deleted `
      );
    }
    res.send(deleteCover);
  } catch (error) {
    next(error);
  }
};

export const getAllCoverSongs = async (req, res, next) => {
  try {
    const coverSongs = await CoverSong.find({}).populate("comments");
    res.send(coverSongs);
  } catch (error) {
    next(error);
  }
};

export const getCoverSongById = async (req, res, next) => {
  try {
    const coverSongs = await CoverSong.findById(req.params.id).populate(
      "comments"
    );
    res.send(coverSongs);
  } catch (error) {
    next(error);
  }
};

// cuts the youtube link to get only the id of the link
function getYouTubeAndBackgroundId(url) {
  var regExp =
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  var match = url.match(regExp);
  return match && match[7].length == 11 ? match[7] : false;
}

export const postCoverData = async (req, res, next) => {
  try {
    //* get the data from body
    const {
      youtubeUrl,
      coverArtistName,
      originalSongCover,
      originalArtist,
      originalLanguage,
      originalSongName,
      likes,
      originalSongId,
    } = req.body;

    if (!(youtubeUrl && coverArtistName)) {
      res.status(400);
      throw new Error("Artist name & youtube link are required");
    }

    const getLinkId = getYouTubeAndBackgroundId(youtubeUrl);
    const existingYoutubeUrl = await CoverSong.findOne({
      youtubeUrl: getLinkId,
    });
    if (existingYoutubeUrl) {
      res.status(409);
      throw new Error("This cover song has been already added");
    }

    const newCoverSong = await CoverSong.create({
      youtubeUrl: getLinkId,
      backgroundUrl: getLinkId,
      coverArtistName,
      originalSongCover,
      originalArtist,
      originalLanguage,
      originalSongName,
      likes,
      originalSongId,
    });
    logger.info(
      `Cover song with the Artist name of ${coverArtistName} has been created`
    );

    await Song.findByIdAndUpdate(
      originalSongId,
      {
        $push: {
          coverSong: newCoverSong._id,
        },
      },
      { new: true }
    );

    res.status(201).send(newCoverSong);
  } catch (error) {
    next(error);
  }
};

export const clickToAddView = async (req, res, next) => {
  try {
    const coverSong = await CoverSong.findByIdAndUpdate(
      req.params.id,
      {
        $inc: { views: 1 },
      },
      { new: true }
    );
    if (!coverSong) {
      res.status(404);
      throw new Error("Cover song not found");
    }
    res.send(coverSong);
  } catch (error) {
    next(error);
  }
};

export const toggleLike = async (req, res, next) => {
  try {
    const userId = req.user._id;
    const coverSong = await CoverSong.findById(req.params.id);

    if (!coverSong) {
      res.status(404);
      logger.info(`Cover song with id of ${req.params.id} is not found.`);
      return res.send("Cover song not found.");
    }

    // Check if the user has already liked the cover song
    const isLiked = coverSong.likes.includes(userId.toString());

    if (isLiked) {
      // User has liked the cover song, so remove the like
      await CoverSong.findByIdAndUpdate(
        req.params.id,
        { $pull: { likes: userId.toString() } },
        { new: true }
      );
      logger.info(
        `User with id of ${userId.toString()} has unliked the cover song with id of ${
          coverSong._id
        }.`
      );
    } else {
      // User has not liked the cover song, so add a like
      await CoverSong.findByIdAndUpdate(
        req.params.id,
        { $push: { likes: userId.toString() } },
        { new: true }
      );
      logger.info(
        `User with id of ${userId.toString()} has liked the cover song with id of ${
          coverSong._id
        }.`
      );
    }

    // Refetch the coverSong to send the updated document as a response
    const updatedCoverSong = await CoverSong.findById(req.params.id);
    res.send(updatedCoverSong);
  } catch (error) {
    logger.error(`Error in toggleLike: ${error.message}`);
    next(error);
  }
};

export const getTopCoverSongs = async (req, res, next) => {
  try {
    const language = req.query.language;
    if (language === "hebrew") {
      const hebrewSongs = await CoverSong.find({
        originalLanguage: "hebrew",
      }).limit(10);
      if (!hebrewSongs) {
        res.status(404);
        throw new Error("Hebrew songs not found");
      }
      res.send(hebrewSongs);
    }
    if (language === "arabic") {
      const arabicSongs = await CoverSong.find({
        originalLanguage: "arabic",
      }).limit(10);
      if (!arabicSongs) {
        res.status(404);
        throw new Error("Arabic songs not found");
      }
      res.send(arabicSongs);
    }
  } catch (error) {
    next(error);
  }
};
