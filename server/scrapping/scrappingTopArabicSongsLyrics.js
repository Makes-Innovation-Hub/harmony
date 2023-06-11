import axios from "axios";
import * as cheerio from "cheerio";
import logger from "../logger.js";
import { genArabicLyricsUrl } from "../utils/arabicLyricsUrl.js";

async function scrapeTopArabicSongsLyrics(req, res) {
  const artistName = req.body.artistName;
  const songName = req.body.songName;
  logger.info(
    `start scrap top Arabic songs lyrics with artist name: ${JSON.stringify(
      artistName
    )} and song name: ${JSON.stringify(songName)}`
  );

  const url = genArabicLyricsUrl(artistName, songName);

  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    const lyricsDiv = $(".direction-rtl");

    const scrapedLyrics = [];

    lyricsDiv.find("div").each((index, element) => {
      const text = $(element).text().trim();
      scrapedLyrics.push(text);
    });
    logger.info(`lyrics scraped successfully`);
    res.json(scrapedLyrics);
  } catch (error) {
    if (error.response.status === 404) {
      console.log("URL not found. Error 404.");
    }
    return false;
  }
}

export default scrapeTopArabicSongsLyrics;
