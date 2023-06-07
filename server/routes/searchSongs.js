import express from "express";
import Song from "../models/Song.js";
import Artist from "../models/Artist.js";

const router = express.Router();

const searchSong = async (req, res) => {
  const { artistName, songName } = req.query;

  try {
    const songs = await Song.find({
      $or: [
        { "name.hebrew": songName },
        { "name.arabic": songName },
        { "name.english": songName },
      ],
    }).populate({
      path: "artist",
      match: { "name.english": artistName },
    });

    if (songs.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "Song not found" });
    }

    // Filter out songs without matching artist
    const filteredSongs = songs.filter((song) => song.artist !== null);

    res.status(200).json({ success: true, data: filteredSongs });
  } catch (error) {
    console.error("Search error:", error);
    res
      .status(500)
      .json({ success: false, message: "Error searching for songs" });
  }
};

router.get("/searchSong", searchSong);

export default router;
