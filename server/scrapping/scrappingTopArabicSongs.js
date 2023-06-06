import axios from "axios";
import * as cheerio from "cheerio";
import { arabTopSongsUrl } from "../constants/urls.js";
import { getCoverArtForSong } from "../spotifyapi.js";

async function scrapeTopArabicSongs(req, res) {
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
        songData.coverArt = coverResult;
        results.push(songData);
        count++;
        if (count === 10) {
          res.json({ songsArr: results });
          return false;
        }
      }
    });
  } catch (error) {
    console.error(error);
  }
}

export default scrapeTopArabicSongs;
