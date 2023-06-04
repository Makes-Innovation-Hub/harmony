import puppeteer from "puppeteer";
import { genGoogleLyricsUrl } from "../utils/googleLyricsUrl.js";

const scrapeGoogleLyrics = async (songName, singerName) => {
  const browser = await puppeteer.launch({
    headless: true,
    defaultViewport: null,
  });

  const page = await browser.newPage();
  page.setDefaultNavigationTimeout(60000);
  const searchUrl = genGoogleLyricsUrl(songName, singerName);

  await page.goto(searchUrl);

  await page.waitForSelector("#search");

  const links = await page.evaluate(() => {
    const linkElements = Array.from(document.querySelectorAll("div.yuRUbf a"));
    return linkElements.map((element) => {
      const href = element.href;
      if (
        href.startsWith("https://shironet.mako") ||
        href.startsWith("https://genius.com/") ||
        href.startsWith("https://www.tab4u.com/")
      ) {
        return href;
      }
    });
  });

  const filteredLinks = links.filter(Boolean);

  const lyrics = [];

  for (const link of filteredLinks) {
    await page.goto(link);
    await page.waitForSelector(
      "span.artist_lyrics_text, .Lyrics__Container-sc-1ynbvzw-5, .song_only"
    );
    const lyricsText = await page.evaluate(() => {
      const spanElement = document.querySelector(
        "span.artist_lyrics_text, .Lyrics__Container-sc-1ynbvzw-5, .song_only"
      );
      return spanElement.textContent;
    });
    lyrics.push(lyricsText);
  }

  console.log(lyrics);
  return lyrics;
};

scrapeGoogleLyrics("פאר טסי", "אהבה חולה");
