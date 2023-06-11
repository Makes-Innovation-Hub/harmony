import axios from "axios";
import logger from "../logger.js";
import * as cheerio from "cheerio";
import { arabTopSongsUrl } from "../constants/urls.js";
import { getCoverArtForSong } from "../spotifyapi.js";

async function scrapeTopArabicSongs(req, res) {
  logger.info("starting to scrap top arabic songs");
  try {
    const { data } = await axios.get(arabTopSongsUrl);
    const $ = cheerio.load(data);

    const h3Elements = $("h3");
    let count = 0;
    const results = [];

    h3Elements.each(async (index, element) => {
      const text = $(element).text();
      const [artist, song] = text.split(" – ");
      if (song) {
        const songData = {};
        const formattedArtist = artist.replace(/^\d+\.\s*/, "");
        songData.artist = formattedArtist;
        songData.song = song;
        const coverResult = await getCoverArtForSong(song, artist);
        logger.info(
          `cover art found for song name: ${song} and artist name: ${artist}`
        );
        songData.coverArt = coverResult;
        results.push(songData);
        count++;
        if (count === 10) {
          logger.info("scraped successfully top Arabic songs");
          res.json({ songsArr: results });
          return false;
        }
      }
    });
  } catch (error) {
    logger.error("error in scrap top arabic songs:", error);
  }
}

export default scrapeTopArabicSongs;
