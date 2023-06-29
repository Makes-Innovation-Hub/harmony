import express from "express";
import Song from "../models/Song.js";
import Artist from "../models/Artist.js";
const router = express.Router();

router.post("/", async (req, res) => {
  const searchTerm = req.body.searchTerm;
  try {
    const [songResults, artistResults] = await Promise.all([
      
      Song.find({
        $or: [
          { "name.hebrew": { $regex: searchTerm, $options: "i" } },
          { "name.arabic": { $regex: searchTerm, $options: "i" } },
          { "name.english": { $regex: searchTerm, $options: "i" } },
        ],
      }).populate("artist"),
      Artist.find({
        $or: [
          { "name.hebrew": { $regex: searchTerm, $options: "i" } },
          { "name.arabic": { $regex: searchTerm, $options: "i" } },
          { "name.english": { $regex: searchTerm, $options: "i" } },
        ],
      }).populate("songs"),
    ]);

    const formattedResults = {
      songs: songResults.map((song) => ({
        id: song._id,
        name: song.name,
        imgURL: song.coverArt,
        originalLang: song.originalLang,
        artist: {
          name: song.artist.name,
          imgURL: song.artist.imgURL
        }
      })),
      artists: artistResults.map((artist) => ({
        id: artist._id,
        name: artist.name,
        imgURL: artist.imgURL,
        songs: artist.songs.map((song) => ({
          id: song._id,
          name: song.name,
        })),
      })),
    };
    res.json(formattedResults);
  } catch (error) {
    console.error("Search error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
