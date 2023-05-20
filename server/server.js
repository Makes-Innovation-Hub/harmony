import dotenv from "dotenv";
import express from "express";
import { fileURLToPath } from "url";
import { join, dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();
import { getAlbumFromSongAndArtist } from './spotify.js'; 
dotenv.config({ path: join(__dirname, "config.env") });
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
app.get('/album/:songName/:artistName', async (req, res) => {
  const { songName, artistName } = req.params;

  try {
    const albumName = await getAlbumFromSongAndArtist(songName, artistName);
    const lyrics = await getLyricsForSong(songName, artistName);
    res.json({ albumName, lyrics });
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'An error occurred.' });
  }
});
