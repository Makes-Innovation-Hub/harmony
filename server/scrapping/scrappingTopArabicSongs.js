import axios from "axios";
import logger from "../logger.js";
import * as cheerio from "cheerio";
import { arabTopSongsUrl } from "../constants/urls.js";
import { fixString } from "../utils/paramEncoder.js";

async function scrapeTopArabicSongs() {
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
        const formattedArtist = fixString(artist.replace(/^\d+\.\s*/, ""));
        songData.artist = formattedArtist;
        songData.song = fixString(song);

        results.push(songData);
        count++;
        if (count === 10) {
          logger.info("scraped successfully top Arabic songs");
        }
      }
    });
    return results;
  } catch (error) {
    logger.error("error in scrap top arabic songs:", error);
  }
}

export default scrapeTopArabicSongs;
