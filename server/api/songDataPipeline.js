import SpotifyWebApi from "spotify-web-api-node";
import logger from "../logger.js";
import dotenv from "dotenv";
import puppeteer from "puppeteer";
import { genGoogleLyricsUrl } from '../utils/googleLyricsUrl.js';
import detectLanguage from '../utils/detectLang.js'
import { generalTranslation } from '../utils/openAiTranslation.js';
import Artist from '../models/Artist.js';
import Song from '../models/Song.js';
import { initSongData, updateObjLanguage } from '../utils/pipelingUtils.js'

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
        const songData = initSongData();
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
            const lyrics = results[2];
            logger.info('detecting original language for lyrics')
            const originalLang = detectLanguage(lyrics);
            logger.info('found original language for lyrics: ', originalLang)
            songData.originalLang = originalLang;
            const [updatedSongData, notFilledLangsLyrics, originalLyricsLang] = updateObjLanguage(songData, 'lyrics', originalLang, lyrics[0])
            logger.info('stored lyrics in songs data at language: ', detectLanguage)
            // translate song name 3 langs
            logger.info('detecting language for the song name: ', songName);
            const nameLang = detectLanguage(songName);
            logger.info(`detected that language for the song name: ${songName} is: ${nameLang}`);
            const [newSongData, notFilledLangs, originalNameLang] = updateObjLanguage(updatedSongData, 'name', nameLang, songName)
            // translate artist name 3 langs
            const transPromises = [];
            notFilledLangs.forEach(async (targetLang) => {
                logger.info(`translating ${songName} from lang: ${originalNameLang} to ${targetLang}`);
                const p = generalTranslation(songName, originalNameLang, targetLang).then(translatedName => {
                    logger.info(`translation results for ${songName} from lang: ${originalNameLang} to ${targetLang} is: ${translatedName}`);
                    songData.name[targetLang] = translatedName;
                });
                transPromises.push(p);
            });

            // translate lyrics name 3 langs
            notFilledLangsLyrics.forEach(async (targetLang) => {
                logger.info(`translating lyrics from lang: ${originalLyricsLang} to ${targetLang}`);
                const p = generalTranslation(lyrics, originalLyricsLang, targetLang).then(translatedLyrics => {
                    logger.info(`done translation for lyrics from lang: ${originalLyricsLang} to ${targetLang}`);
                    songData.lyrics[targetLang] = translatedLyrics;
                });
                transPromises.push(p);
            });
            Promise.all(transPromises)
                .catch(err => {
                    logger.error('error in translating', JSON.stringify(err));
                })
                .finally(async res => {
                    logger.info('done translating');
                    try {
                        // store in mongodb
                        logger.info('starting to store artist data in DB');
                        const artistRes = await Artist.create(artistData);
                        const artistId = artistRes._id;
                        newSongData.artist = artistId;
                        const songId = await Song.create(newSongData)._id;
                        await Artist.updateOne({ _id: artistId }, { $push: { songs: songId } })
                    } catch (error) {
                        console.log('error', error)
                        logger.error('error in storing in DB', JSON.stringify(error));
                    }
                })
        }).catch(err => {
            logger.error('err', JSON.stringify(err));
        })
    } catch (error) {

    }
}

async function getArtistData(artistName) {
    logger.info(`starting to get artist data for: ${artistName}`)
    const nameLang = detectLanguage(artistName);
    logger.info(`detected that language for the song name: ${artistName} is: ${nameLang}`);
    const notFilledLangs = [];
    const transPromises = [];
    let originalNameLang;
    try {
        const res = await spotifyApi.searchArtists(artistName);
        logger.info(`completed spotify api call for: ${artistName}`)
        const firstRes = res.body.artists.items[0];
        const artistData = {
            name: {
                english: '',
                hebrew: '',
                arabic: '',
            },
            imgURL: firstRes.images[0].url,
            songs: [],
            albums: firstRes.albums || []
        };
        switch (nameLang) {
            case 'en':
                artistData.name.english = artistName;
                notFilledLangs.push('hebrew', 'arabic');
                originalNameLang = 'english';
                break;
            case 'he':
                originalNameLang = 'hebrew';
                artistData.name.hebrew = artistName;
                notFilledLangs.push('english', 'arabic');
                break;
            case 'ar':
                originalNameLang = 'arabic';
                artistData.name.arabic = artistName;
                notFilledLangs.push('english', 'hebrew');
                break;
        }
        // translate artists name
        notFilledLangs.forEach(async (targetLang) => {
            logger.info(`translating artist name from lang: ${originalNameLang} to ${targetLang}`);
            const p = generalTranslation(artistName, originalNameLang, targetLang).then(translatedArtistName => {
                logger.info(`translating results of artist name from lang: ${originalNameLang} to ${targetLang} as: ${translatedArtistName}`);
                artistData.name[targetLang] = translatedArtistName;
            });
            transPromises.push(p);
        });
        await Promise.all(transPromises).catch(err => {
            logger.error('error in translating', JSON.stringify(err));

        }).finally(() => {
            logger.info(`finished to get artist data for: ${artistName}`);
        })
        return artistData;
    } catch (error) {
        logger.error('error getArtistData', JSON.stringify(error))
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
