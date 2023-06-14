import SpotifyWebApi from "spotify-web-api-node";
import logger from "../logger.js";
import dotenv from "dotenv";
import puppeteer from "puppeteer";
import { genGoogleLyricsUrl } from '../utils/googleLyricsUrl.js';
import detectLanguage from '../utils/detectLang.js'

dotenv.config({ path: "./config/config.env" });

const spotifyApi = new SpotifyWebApi({
    clientId: process.env.SPOTIFY_CLIENT_ID,
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
});

const data = await spotifyApi.clientCredentialsGrant();
const accessToken = data.body.access_token;
spotifyApi.setAccessToken(accessToken);

async function songDataPipeline(songName, artistName) {
    try {
        const songData = {};
        await Promise.all([
            getArtistData(artistName),
            getCoverArt(songName, artistName),
            getLyrics(songName, artistName)
        ]).then(results => {
            // get artist data - name + art
            const artistData = results[0];
            // get cover art
            songData.imgURL = results[1];
            // get lyrics
            songData.lyrics = {};
            const lyrics = results[2];
            const originalLang = detectLanguage(lyrics);
            console.log('originalLang', originalLang);
            switch (originalLang) {
                case 'en':
                    songData.lyrics.english = lyrics;
                    break;
                case 'he':
                    songData.lyrics.hebrew = lyrics;
                    break;
                case 'ar':
                    songData.lyrics.arabic = lyrics;
                    break;
            }
            console.log('songData', songData)
            // translate song name 3 langs
            // translate artist name 3 langs
            // translate lyrics name 3 langs
            // store in mongodb

        }).catch(err => {
            console.log('err', err);
        }).finally(() => {
            console.log('done');
        });
    } catch (error) {

    }
}

async function getArtistData(artistName) {
    logger.info(`starting to get artist data for: ${artistName}`)
    try {
        const res = await spotifyApi.searchArtists(artistName);
        logger.info(`completed spotify api call for: ${artistName}`)
        const firstRes = res.body.artists.items[0];
        const artistData = {
            name: artistName,
            spotifyId: firstRes.id,
            img: firstRes.images[0].url
        };
        logger.info(`finished to get artist data for: ${artistName}`)
        return artistData;
    } catch (error) {
        console.log('error getArtistData', error);
    }
}

async function getCoverArt(songName, artistName) {
    logger.info(
        `starting to get cover art for songs params are song name: ${songName} artist name: ${artistName}  `
    );
    try {
        let searchQuery;
        if (/[א-ת ]/.test(artistName)) {
            // Artist name contains Hebrew characters or a comma
            searchQuery = songName;
        } else {
            searchQuery = `track:${songName} artist:${artistName}`;
        }

        const searchResult = await spotifyApi.searchTracks(searchQuery);
        const track = searchResult.body.tracks.items[0];
        if (track) {
            const coverArt = track.album.images[0].url;
            return coverArt;
        } else {
            // Retry search using only the song name
            const fallbackResult = await spotifyApi.searchTracks(songName);
            const fallbackTrack = fallbackResult.body.tracks.items[0];
            if (fallbackTrack) {
                const fallbackCoverArt = fallbackTrack.album.images[0].url;
                return fallbackCoverArt;
            } else {
                throw new Error("Song not found.");
            }
        }
    } catch (error) {
        logger.error("Error in getCoverArtForSong:", error.message);
        return false;
    }
}

async function getLyrics(songName, artistName) {
    logger.info(
        `start scrap google lyrics with song name: ${JSON.stringify(
            songName
        )} and singer name: ${JSON.stringify(artistName)}`
    );
    try {
        const browser = await puppeteer.launch({
            headless: true,
            defaultViewport: null,
        });
        const page = await browser.newPage();
        page.setDefaultNavigationTimeout(80000);
        const searchUrl = genGoogleLyricsUrl(songName, artistName);
        logger.info(`preparing to scrap url: ${searchUrl}`);
        await page.goto(searchUrl);
        await page.waitForSelector("#search");
        const links = await page.evaluate(() => {
            const linkElements = Array.from(document.querySelectorAll("div.yuRUbf a"));
            console.log('linkElements', linkElements);
            const filteredLinks = [];
            linkElements.forEach((element) => {
                const href = element.href;
                console.log('href', href);
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
        logger.error("err in scrapping from google lyrics", error);
        console.log('error', error);
    }
}


function translate(type, text, originLang, tragetLang) { }

function saveSongDB() { }

function saveArtistDB() { }

function saveTop10DB() { }

setTimeout(() => {
    songDataPipeline('unicorn', 'noa kirel');
}, 5000);
export default { songDataPipeline };
