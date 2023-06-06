import express from "express";
import axios from "axios";
import cheerio from "cheerio";
import dotenv from "dotenv";
dotenv.config({ path: "./config/config.env" });

const app = express();

async function fetchLyrics(searchTerm) {
  const options = {
    method: "GET",
    url: "https://genius-song-lyrics1.p.rapidapi.com/search/",
    params: {
      q: searchTerm,
      per_page: "20",
      page: "1",
    },
    headers: {
      "X-RapidAPI-Key": process.env.RAPIDAPI_KEY,
      "X-RapidAPI-Host": "genius-song-lyrics1.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    const hits = response.data.hits;

    if (hits && hits.length > 0) {
      const firstHit = hits[0];
      const songResult = firstHit.result;
      const lyricsUrl = `https://genius.com${songResult.path}`;

      const lyricsResponse = await axios.get(lyricsUrl);
      const $ = cheerio.load(lyricsResponse.data);

      const lyrics = $('div[data-lyrics-container="true"]')
        .html()
        .replace(/<br>/g, "\n")
        .trim();

      if (lyrics.length > 0) {
        const lines = lyrics.split("\n");
        return lines;
      } else {
        console.error("No lyrics found.");
        return false;
      }
    } else {
      console.error("No search results found.");
      return false;
    }
  } catch (error) {
    console.error(error);
    return false;
  }
}
export { fetchLyrics };
