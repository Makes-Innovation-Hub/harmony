import cors from 'cors'
import dotenv from "dotenv";
import express from "express";
import { fileURLToPath } from "url";
import { join, dirname } from "path";
import {connectDB, closeDBConnection} from "./config/db.js";
import scrappingRoutes from './routes/scrappingRoutes.js'
import {getAlbumFromSongAndArtist, getCoverArtForSong} from './spotifyapi.js'; 


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.use(cors())


dotenv.config({ path: join(__dirname, "./config/config.env") });


app.use("/api/v1/", scrappingRoutes)


const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV

let server;

connectDB()

app.listen(
  PORT,
  console.log(`Server running in ${NODE_ENV}
  mode on port ${PORT}`)
);
app.get('/:songName/:artistName', async (req, res) => {
  const { songName, artistName } = req.params;

  try {
    let ArtistName = '';
    const containsHebrew = /[א-ת]/.test(artistName);

    if (!containsHebrew) {
      ArtistName = artistName;
    }

    const [albumName, coverArt] = await Promise.all([
      getAlbumFromSongAndArtist(songName, ArtistName),
      getCoverArtForSong(songName, ArtistName)
    ]);

    res.json({ albumName, coverArt });
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'An error occurred.' });
  }
});


process.on("unhandledRejection", (err, promise) => {
  console.error(`Error: ${err.message}`);
  server.close(() => process.exit(1));
  closeDBConnection()
});


