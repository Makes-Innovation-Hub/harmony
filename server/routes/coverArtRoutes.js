import express from "express";
const router = express.Router();
import {
  getAlbumFromSongAndArtist,
  getCoverArtForSong,
} from "../spotifyapi.js";

router.get("/:songName/:artistName", async (req, res) => {
  const { songName, artistName } = req.params;

  try {
    let ArtistName = "";
    const containsHebrew = /[א-ת]/.test(artistName);

    if (!containsHebrew) {
      ArtistName = artistName;
    }

    const [albumName, coverArt] = await Promise.all([
      getAlbumFromSongAndArtist(songName, ArtistName),
      getCoverArtForSong(songName, ArtistName),
    ]);

    res.json({ albumName, coverArt });
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: "An error occurred." });
  }
});
export default router;
