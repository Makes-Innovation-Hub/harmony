import SpotifyWebApi from 'spotify-web-api-node';
import dotenv from 'dotenv';
import axios from 'axios';
dotenv.config({ path: './config/config.env' });
const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
});
async function getAlbumFromSongAndArtist(songName, artistName) {
  try {
    const data = await spotifyApi.clientCredentialsGrant();
    const accessToken = data.body.access_token;
    spotifyApi.setAccessToken(accessToken);
    const searchResult = await spotifyApi.searchTracks(`${songName} artist:${artistName}`);
    const track = searchResult.body.tracks.items[0];
    if (track) {
      const albumId = track.album.id;
      const albumResult = await spotifyApi.getAlbum(albumId);
      const album = albumResult.body;
      return album.name;
    } else {
      throw new Error('Song not found.');
    }
  } catch (error) {
    console.error('Error:', error.message);
  }
}
async function getCoverArtForSong(songName, artistName) {
    try {
      const data = await spotifyApi.clientCredentialsGrant();
      const accessToken = data.body.access_token;
      spotifyApi.setAccessToken(accessToken);
      const searchResult = await spotifyApi.searchTracks(`${songName} artist:${artistName}`);
      const track = searchResult.body.tracks.items[0];
      if (track) {
        const albumId = track.album.id;
        const albumResult = await spotifyApi.getAlbum(albumId);
        const album = albumResult.body;
        const coverArt = album.images[0].url; 
        return coverArt;
      } else {
        throw new Error('Song not found.');
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  }
  
async function exampleUsage() {
  try {
    const albumName = await getAlbumFromSongAndArtist('Ach Khbarek', 'Saad Lamjarred ');
    console.log('Album:', albumName);

    const coverArt = await getCoverArtForSong('Ach Khbarek', 'Saad Lamjarred ');
    console.log('Cover Art:', coverArt);
  } catch (error) {
    console.error('Error:', error.message);
  }
}
exampleUsage();
export { getAlbumFromSongAndArtist, getCoverArtForSong };
