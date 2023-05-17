import axios from "axios";
import * as cheerio from "cheerio";
import { arabTopSongsUrl } from "../constants/urls.js";

async function scrapeTopArabicSongs() {
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

    const jsonResult = JSON.stringify(results, null, 2);

    return jsonResult;
  } catch (error) {
    console.error(error);
  }
}