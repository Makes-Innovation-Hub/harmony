import { expect } from "chai";
import sinon from "sinon";
import puppeteer from "puppeteer";

describe("prepareLyrics", () => {
  let loggerStub;
  let scrapGoogleFnStub;
  let translateText3LangStub;

  beforeEach(() => {
    loggerStub = {
      info: sinon.stub(),
      error: sinon.stub(),
    };

    scrapGoogleFnStub = sinon.stub().callsFake(async (songName, singerName) => {
      const browser = await puppeteer.launch({
        headless: true,
        defaultViewport: null,
      });

      const page = await browser.newPage();
      page.setDefaultNavigationTimeout(80000);
      const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(
        songName + " " + singerName + " lyrics"
      )}`;

      await page.goto(searchUrl);

      await page.waitForSelector("#search");

      const links = await page.evaluate(() => {
        const linkElements = Array.from(
          document.querySelectorAll("div.yuRUbf a")
        );

        const filteredLinks = [];

        linkElements.forEach((element) => {
          const href = element.href;

          if (href.startsWith("https://shironet.mako")) {
            filteredLinks.push(href);
          } else if (href.startsWith("https://genius.com/")) {
            filteredLinks.push(href);
          } else if (href.startsWith("https://www.tab4u.com/")) {
            filteredLinks.push(href);
          } else if (href.startsWith("https://www.lyrics-arabic.com/")) {
            filteredLinks.push(href);
          } else if (href.startsWith("https://lyricstranslate.com/")) {
            filteredLinks.push(href);
          }
        });

        return filteredLinks;
      });

      const filteredLinks = links.filter(Boolean).slice(0, 1);
      loggerStub.info(`the link to scrap lyrics google is: ${filteredLinks}`);

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

      loggerStub.info("lyrics from google scrap successfully");
      return lyrics;
    });

    translateText3LangStub = sinon.stub();
  });

  afterEach(() => {
    sinon.restore();
  });

  it("should generate lyrics for a song and artist and translate them", async () => {
    const song = "Some Song";
    const artist = "Some Artist";
    const lyrics = ["Lyrics text"];

    scrapGoogleFnStub.withArgs(song, artist).resolves(lyrics);

    const result = await prepareLyrics(song, artist);

    expect(result).to.deep.equal({
      hebrew: "Hebrew translation",
      arabic: "Arabic translation",
      english: "English translation",
    });
    expect(loggerStub.info.calledTwice).to.be.true;
    expect(loggerStub.info.firstCall.args[0]).to.equal(
      `starting to generate lyrics for song: ${song} artist: ${artist}`
    );
    expect(loggerStub.info.secondCall.args[0]).to.equal(
      `detected that language for the text: ${lyrics} is: english`
    );
    expect(scrapGoogleFnStub.calledOnce).to.be.true;
    expect(scrapGoogleFnStub.firstCall.args).to.deep.equal([song, artist]);
    expect(translateText3LangStub.calledOnce).to.be.true;
    expect(translateText3LangStub.firstCall.args).to.deep.equal([lyrics[0]]);
  });

  it("should handle empty lyrics and return null", async () => {
    const song = "Some Song";
    const artist = "Some Artist";
    const lyrics = [];

    scrapGoogleFnStub.withArgs(song, artist).resolves(lyrics);

    const result = await prepareLyrics(song, artist);

    expect(result).to.be.null;
    expect(loggerStub.info.calledOnce).to.be.true;
    expect(loggerStub.info.firstCall.args[0]).to.equal(
      `starting to generate lyrics for song: ${song} artist: ${artist}`
    );
    expect(scrapGoogleFnStub.calledOnce).to.be.true;
    expect(scrapGoogleFnStub.firstCall.args).to.deep.equal([song, artist]);
    expect(translateText3LangStub.called).to.be.false;
  });

  it("should handle translation error and return null", async () => {
    const song = "Some Song";
    const artist = "Some Artist";
    const lyrics = ["Lyrics text"];
    const translationError = new Error("Translation error");

    scrapGoogleFnStub.withArgs(song, artist).resolves(lyrics);
    translateText3LangStub.rejects(translationError);

    const result = await prepareLyrics(song, artist);

    expect(result).to.be.null;
    expect(loggerStub.info.calledOnce).to.be.true;
    expect(loggerStub.info.firstCall.args[0]).to.equal(
      `starting to generate lyrics for song: ${song} artist: ${artist}`
    );
    expect(scrapGoogleFnStub.calledOnce).to.be.true;
    expect(scrapGoogleFnStub.firstCall.args).to.deep.equal([song, artist]);
    expect(translateText3LangStub.calledOnce).to.be.true;
    expect(translateText3LangStub.firstCall.args).to.deep.equal([lyrics[0]]);
    expect(loggerStub.error.calledOnce).to.be.true;
    expect(loggerStub.error.firstCall.args[0]).to.equal(
      `error in generating translations for ${
        lyrics[0].length < 15 ? lyrics[0] : lyrics[0].slice(15) + "..."
      }`
    );
    expect(loggerStub.error.firstCall.args[1]).to.equal(translationError);
  });
});
