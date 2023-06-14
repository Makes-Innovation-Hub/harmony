import SpotifyWebApi from "spotify-web-api-node";
import dotenv from "dotenv";
dotenv.config({ path: "./config/config.env" });

const spotifyApi = new SpotifyWebApi({
    clientId: process.env.SPOTIFY_CLIENT_ID,
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
});

const data = await spotifyApi.clientCredentialsGrant();
const accessToken = data.body.access_token;
spotifyApi.setAccessToken(accessToken);

function songDataPipeline(songName, artistName) {
    // get artist data - name + art
    // get cover art
    // get lyrics
    // translate song name 3 langs
    // translate artist name 3 langs
    // translate lyrics name 3 langs
    // store in mongodb
}

async function getArtistData(artistName) {
    try {
        const res = await spotifyApi.searchArtists(artistName);
        const firstRes = res.body.artists.items[0];
        const artistData = {
            name: artistName,
            spotifyId: firstRes.id,
            img: firstRes.images[0].url
        };
        return artistData;
    } catch (error) {
        console.log('error', error);

    }
}
getArtistData('נעה קירל');

function getCoverArt(artistName, songName) { }

function getLyrics(artistName, songName) { }

function translate(type, text, originLang, tragetLang) { }

function saveSongDB() { }

function saveArtistDB() { }

function saveTop10DB() { }

export default {};
