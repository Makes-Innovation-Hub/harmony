import cors from 'cors';
import dotenv from "dotenv";
import express from "express";
import { fileURLToPath } from "url";
import { join, dirname } from "path";
import {connectDB, closeDBConnection} from "./config/db.js";
import scrapeTopArabicSongs from "./scrapping/scrappingTopArabicSongs.js";
import scrapeTopHebrewSongs from "./scrapping/scrappingTopHebrewSongs.js";
import { getAlbumFromSongAndArtist } from './spotify.js'; 

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.use(cors())
const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV

dotenv.config({ path: join(__dirname, "./config/config.env") });
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


app.get("/topArabicSongs", scrapeTopArabicSongs)
app.get("/topHebrewSongs", scrapeTopHebrewSongs)

let server;
connectDB().then(() => {
  server = app.listen(
    PORT,
    console.log(
      `Server is running in ${NODE_ENV} mode on port ${PORT}`
        
    )
  );
});

process.on("unhandledRejection", (err, promise) => {
  console.error(`Error: ${err.message}`);
  server.close(() => process.exit(1));
  closeDBConnection()
});


