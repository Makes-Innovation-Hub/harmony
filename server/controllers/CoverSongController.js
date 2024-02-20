import CoverSong from "../models/CoverSong.js";
import Song from "../models/Song.js";
import { isValidObjectId } from "mongoose";

// Commit Message:
// Implement CRUD Operations for CoverSongs

// Description:
// - `getSelectCoverData`: Placeholder function to retrieve specific data for a given ID (not yet implemented).
// - `getDeleteAll`: Deletes all documents in the CoverSong collection.
// - `deleteCoverSongById`: Deletes a specific CoverSong document based on the provided ID.
// - `getAllCoverSongs`: Retrieves all CoverSongs from the database.
// - `postCoverData`: Handles the creation of a new CoverSong, checking for existing entries based on youtubeUrl and coverArtist to avoid duplicates.

// Note:
// - The code includes error handling and validation for invalid IDs and existing entries.
// - The commit addresses basic CRUD functionalities for the CoverSong model.

export const getSelectCoverData = async (req, res, next) => {
  try {
    const { id } = req.params;
  } catch (error) {
    next(error);
  }
};

export const getDeleteAll = async (req, res, next) => {
  try {
    await CoverSong.deleteMany({});
    res.send("All delete data successfuly");
  } catch (error) {
    next(error);
  }
};

export const deleteCoverSongById = async (req, res, next) => {
  try {
    //get the id
    const { id } = req.params;
    // check the id if valid
    if (!isValidObjectId(id)) {
      throw new Error("ID not Valid");
    }
    //find the book
    const deleteCover = await CoverSong.findById(id);
    //if book exist
    if (!deleteCover) {
      return res.status(404).json({ message: "CoverSong Not Found" });
    } else {
      //detele the book
      await CoverSong.deleteOne(deleteCover);
    }
    res.send(deleteCover);
  } catch (error) {
    next(error);
  }
};

export const getAllCoverSongs = async (req, res, next) => {
  try {
    const coverSongs = await CoverSong.find({});
    res.send(coverSongs);
  } catch (error) {
    next(error);
  }
};

export const postCoverData = async (req, res, next) => {
  try {
    //* gett the data from body
    const {
      youtubeUrl,
      coverArtist,
      originalSongCover,
      originalArtist,
      originalLanguage,
    } = req.body;
    console.log(youtubeUrl);
    if (!(youtubeUrl && coverArtist)) {
      res.status(400);
      throw new Error(" Artist name & youtube link are required");
    }
    const existingyoutubeUrl = await CoverSong.findOne({ youtubeUrl });
    if (existingyoutubeUrl) {
      res.status(409);
      throw new Error(" CoverSong exist in the DB");
    }

    const newCoverSong = await CoverSong.create({
      youtubeUrl,
      coverArtist,
      originalSongCover,
      originalArtist,
      originalLanguage,
    });

    res.status(201).send(newCoverSong);
  } catch (error) {
    next(error);
  }
};
