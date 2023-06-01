import axios from "axios";
import logger from "../logger.js";
import * as cheerio from "cheerio";
import { arabTopSongsUrl } from "../constants/urls.js";

async function scrapeTopArabicSongs(req, res) {
  try {
    const { data } = await axios.get(arabTopSongsUrl);
    const $ = cheerio.load(data);

    const h3Elements = $("h3");
    let count = 0;
    const results = {};

    h3Elements.each((index, element) => {
      const text = $(element).text();

      const [artist, song] = text.split(" – ");
      const formattedArtist = artist.replace(/^\d+\.\s*/, "");
      results[formattedArtist.trim()] = song.trim();
      count++;

      if (count === 10) {
        return false;
      }
    });
    logger.info("Top Arabic Songs Scrapped");
    res.json(results);
  } catch (error) {
    logger.error(error);
  }
}
export default scrapeTopArabicSongs;
