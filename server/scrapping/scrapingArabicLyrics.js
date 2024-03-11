import puppeteer from "puppeteer";
import logger from "../logger.js";
import reformatScrapingInput from "./reformatScrapingInput.js";
import { SCRAPE_ARABIC_LYRICS_URL } from "../constants/urls.js";
import querySelectors from "../constants/scrapingSelectors.js";

const scrapeArabicLyrics = async (artist, songName) => {
  logger.info(
    `start scrap Arabic lyrics with artist name: ${artist} and song name: ${songName}`
  );
  try {
    const reformatedInput = reformatScrapingInput(artist, songName);
    const browser = await puppeteer.launch({
      headless: "new",
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
      defaultViewport: {
        width: 1920,
        height: 1080,
      },
    });
    const page = await browser.newPage();
    await page.setUserAgent(
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36"
    );

    await page.goto(
      `${SCRAPE_ARABIC_LYRICS_URL + reformatedInput}-lyrics.html`
    );

    await page.waitForSelector(querySelectors.LYRICS_LAST_ROW);

    const lyrics = await page.$eval(
      querySelectors.LYRICS,
      (el) => el.innerText
    );

    await browser.close();
    logger.info("lyrics scrapped successfully");
    return lyrics;
  } catch (error) {
    console.error(`Error while scraping: ${error}`);
  }
};
export default scrapeArabicLyrics;
