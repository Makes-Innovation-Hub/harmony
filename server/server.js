import dotenv from "dotenv";
import express from "express";
import { fileURLToPath } from "url";
import { join, dirname } from "path";
import { getAccessToken,getLyrics } from './spotify.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

dotenv.config({ path: join(__dirname, "config.env") });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

app.get('/test', async (req, res) => {
  try {
    const accessToken = await getAccessToken();
    console.log('Access Token:', accessToken);
    res.send('Access Token retrieved successfully');
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).send('Failed to retrieve Access Token');
  }
});
app.get('/lyrics', async (req, res) => {
  const artist = req.query.artist;
  const song = req.query.song;

  if (!artist || !song) {
    return res.status(400).send('Missing artist or song');
  }

  try {
    const lyrics = await getLyrics(artist, song);
    res.send(lyrics);
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).send('Failed to retrieve lyrics');
  }
});
