import SpotifyWebApi from "spotify-web-api-node";
import dotenv from "dotenv";
import logger from "./logger.js";
dotenv.config({ path: "./config/config.env" });
const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
});

async function getAlbumFromSongAndArtist(songName, artistName) {
  try {
    let searchQuery;
    if (/[א-ת,]/.test(artistName)) {
      // Artist name contains Hebrew characters or a comma
      searchQuery = songName;
    } else {
      searchQuery = `${songName} artist:${artistName}`;
    }

    const data = await spotifyApi.clientCredentialsGrant();
    const accessToken = data.body.access_token;
    spotifyApi.setAccessToken(accessToken);

    const searchResult = await spotifyApi.searchTracks(searchQuery);
    const track = searchResult.body.tracks.items[0];
    if (track) {
      const albumId = track.album.id;
      const albumResult = await spotifyApi.getAlbum(albumId);
      const album = albumResult.body;
      return album.name;
    } else {
      throw new Error("Song not found.");
    }
  } catch (error) {
    logger.error("Error in Spotify api:", error.message);
  }
}

async function getCoverArtForSong(songName, artistName) {
  logger.info(
    `to get cover art for songs params are song name: ${songName} artist name: ${artistName}  `
  );
  try {
    let searchQuery;
    if (/[א-ת ]/.test(artistName)) {
      // Artist name contains Hebrew characters or a comma
      searchQuery = songName;
    } else {
      searchQuery = `track:${songName} artist:${artistName}`;
    }

    logger.info("before getting Spotify keys");
    const data = await spotifyApi.clientCredentialsGrant();
    const accessToken = data.body.access_token;
    spotifyApi.setAccessToken(accessToken);

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
  }
}

export { getAlbumFromSongAndArtist, getCoverArtForSong };
