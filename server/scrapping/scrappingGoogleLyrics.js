import puppeteer from "puppeteer";
import logger from "../logger.js";
import { genGoogleLyricsUrl } from "../utils/googleLyricsUrl.js";

export async function scrapGoogleFn(songName, singerName) {
  try {
    const browser = await puppeteer.launch({
      headless: true,
      defaultViewport: null,
    });

    const page = await browser.newPage();
    page.setDefaultNavigationTimeout(80000);
    const searchUrl = genGoogleLyricsUrl(songName, singerName);

    await page.goto(searchUrl);

    await page.waitForSelector("#search");

    const links = await page.evaluate(() => {
      const linkElements = Array.from(document.querySelectorAll("div.yuRUbf a"));

      const filteredLinks = [];
      const sites = [
        "https://shironet.mako",
        "https://genius.com/",
        "https://www.tab4u.com/",
        "https://www.tab4u.com/",
        "https://www.lyrics-arabic.com/",
        "https://lyricstranslate.com/"
      ]

      linkElements.forEach((element) => {
        const href = element.href;
        for (const site of sites) {
          if (href.startsWith(site)) {
            filteredLinks.push(href);
          }
        }
      });

      return filteredLinks;
    });

    const filteredLinks = links.filter(Boolean).slice(0, 1);
    logger.info(`the link to scrap lyrics google is: ${filteredLinks}`);

    const lyrics = [];

    for (const link of filteredLinks) {
      await page.goto(link);
      await page.waitForSelector(
        ".artist_lyrics_text, .Lyrics__Container-sc-1ynbvzw-5, .song__only, #lyrics span, #song-body"
      );
      const lyricsText = await page.evaluate(() => {
        const spanElement = document.querySelector(
          ".artist_lyrics_text, .Lyrics__Container-sc-1ynbvzw-5, song__only, #lyric span , #song-body"
        );
        return spanElement.innerText;
      });
      lyrics.push(lyricsText);
    }

    logger.info("lyrics from google scrap successfully");
    return lyrics;
  } catch (error) {
    console.log('error', error);
    return false;
  }

}


const scrapeGoogleLyrics = async (req, res) => {
  const songName = req.body.songName;
  const singerName = req.body.singerName;
  logger.info(
    `start scrap google lyrics with song name: ${JSON.stringify(
      songName
    )} and singer name: ${JSON.stringify(singerName)}`
  );
  const lyrics = await scrapGoogleFn(songName, singerName)
  res.json(lyrics);
};

export default scrapeGoogleLyrics;
