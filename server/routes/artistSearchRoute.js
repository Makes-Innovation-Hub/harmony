import express from "express";
import Artist from "../models/Artist.js";
import Song from "../models/Song.js";

const router = express.Router();

const searchArtist = async (req, res) => {
  const { artistName } = req.query;

  try {
    const artists = await Artist.find(
      {
        $or: [
          { "name.hebrew": artistName },
          { "name.arabic": artistName },
          { "name.english": artistName },
        ],
      },
      {
        "name.hebrew": 1,
        "name.arabic": 1,
        "name.english": 1,
        imgURL: 1,
        songs: 1,
      }
    ).populate({
      path: "songs",
      select: {
        _id: 1,
        name: { hebrew: 1, arabic: 1, english: 1 },
        imgURL: 1,
      },
    });

    if (artists.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "Artist not found" });
    }

    res.status(200).json({ success: true, data: artists });
  } catch (error) {
    console.error("Search error:", error);
    res
      .status(500)
      .json({ success: false, message: "Error searching for artists" });
  }
};

router.get("/searchArtist", searchArtist);

export default router;
