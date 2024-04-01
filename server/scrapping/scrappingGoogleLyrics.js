import puppeteer from "puppeteer";
import logger from "../logger.js";
import { genGoogleLyricsUrl } from "../utils/googleLyricsUrl.js";

export async function scrapGoogleFn(songName, singerName) {
  try {
    const browser = await puppeteer.launch({
      headless: "new",
      args: [
        "--no-sandbox",
        "--disable-setuid-sandbox",
        "--disable-dev-shm-usage",
        "--disable-accelerated-2d-canvas",
        "--no-first-run",
        "--no-zygote",
        "--disable-gpu",
      ],
      defaultViewport: null,
    });

    const page = await browser.newPage();
    page.setDefaultNavigationTimeout(120000);

    const searchUrl = genGoogleLyricsUrl(songName, singerName);

    await page.goto(searchUrl);

    await page.waitForSelector("#search");

    const links = await page.evaluate(() => {
      const linkElements = Array.from(
        document.querySelectorAll("div.yuRUbf a")
      );

      const filteredLinks = [];
      const sites = [
        "https://shironet.mako",
        "https://genius.com/",
        "https://www.tab4u.com/",
        "https://www.lyrics-arabic.com/",
        "https://lyricstranslate.com/",
        "https://www.musixmatch.com/",
        "https://kalimat.anghami.com",
      ];

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
    if (filteredLinks.length === 0) {
      browser.close();
      return false;
    }
    logger.info(`the link to scrap lyrics google is: ${filteredLinks}`);

    // Enable request interception
    await page.setRequestInterception(true);

    // Intercept requests to ignore loading videos and images
    page.on("request", (request) => {
      if (
        request.resourceType() === "image" ||
        request.resourceType() === "video"
      ) {
        request.abort();
      } else {
        request.continue();
      }
    });

    for (const link of filteredLinks) {
      await page.goto(link);

      // Wait for the lyrics container to be loaded
      await page.waitForSelector(
        'div.css-175oi2r.r-13awgt0.r-eqz5dr.r-1v1z2uz div.r-zd98yo , .artist_lyrics_text, [data-lyrics-container="true"], #songContentTPL, #lyric span, #song-body, .lyrics,div.mxm-lyrics > span ,  div.lyrics-page_lyrics__QEN3R > pre '
      );

      const lyricsText = await page.evaluate(() => {
        const elements = Array.from(
          document.querySelectorAll(
            'div.css-175oi2r.r-13awgt0.r-eqz5dr.r-1v1z2uz div.r-zd98yo , .artist_lyrics_text, [data-lyrics-container="true"], #songContentTPL, #lyric span, #song-body, .lyrics,div.mxm-lyrics > span ,  div.lyrics-page_lyrics__QEN3R > pre '
          )
        );
        return elements.map((element) => element.innerText.trim());
      });

      logger.info("lyrics from google scrap successfully");
      browser.close();
      return [lyricsText.join("\n")];
    }
  } catch (error) {
    logger.error("error", error);
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
  const lyrics = await scrapGoogleFn(songName, singerName);
  res.json(lyrics);
};

export default scrapeGoogleLyrics;
