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
async function getLyricsForSong(songName, artistName) {
  try {
    const response = await axios.get('https://api.musixmatch.com/ws/1.1/matcher.lyrics.get', {
      params: {
        apikey: process.env.MUSIXMATCH_API_KEY,
        q_track: songName,
        q_artist: artistName,
        format: 'json',
      },
    });
    const lyricsData = response.data.message.body.lyrics;
    if (lyricsData) {
      return lyricsData.lyrics_body;
    } else {
      throw new Error('Lyrics not found.');
    }
  } catch (error) {
    console.error('Error:', error.message);
  }
}
async function exampleUsage() {
  try {
    const albumName = await getAlbumFromSongAndArtist('qusad einy', 'Amr Diab');
    console.log('Album:', albumName);

    const lyrics = await getLyricsForSong('qusad einy', 'Amr Diab');
    console.log('Lyrics:', lyrics);
  } catch (error) {
    console.error('Error:', error.message);
  }
}
exampleUsage();
export { getAlbumFromSongAndArtist, getLyricsForSong };
