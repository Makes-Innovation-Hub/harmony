import puppeteer from "puppeteer";

import { hebrewTopSongsUrl } from "../constants/urls.js";
import { getCoverArtForSong } from "../spotifyapi.js";

const scrapeTopHebrewSongs = async (req, res) => {
  const browser = await puppeteer.launch({
    headless: true,
    defaultViewport: null,
  });

  const page = await browser.newPage();

  await page.goto(hebrewTopSongsUrl, {
    waitUntil: "networkidle2",
  });

  await page.waitForSelector("chart-page");

  const data = await page.evaluate(() => {
    const chartPage = document.querySelector("chart-page");

    const infoElements = Array.from(chartPage.querySelectorAll(".info"));
    const nameElements = Array.from(chartPage.querySelectorAll(".name"));

    const infoTexts = infoElements.map((element) => element.innerText);
    const nameTexts = nameElements.map((element) => element.innerText);

    return { info: infoTexts, name: nameTexts };
  });

  const coverArtPromises = data.info.map(async (info, index) => {
    const name = data.name[index];
    const coverArt = await getCoverArtForSong(info, name);
    return coverArt;
  });

  const coverArtArray = await Promise.all(coverArtPromises);

  const formattedData = data.name.map((artist, index) => ({
    artist: artist,
    songName: data.info[index],
    coverArt: coverArtArray[index],
  }));

  await browser.close();
  res.json(formattedData);
};

export default scrapeTopHebrewSongs;
