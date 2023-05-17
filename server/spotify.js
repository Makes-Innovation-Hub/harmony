import  SpotifyWebApi from 'spotify-web-api-node';
import dotenv from 'dotenv';
dotenv.config({ path: './.env' });
// Set up the Spotify API client
const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
});
// Function to get the album from a song name and artist
async function getAlbumFromSongAndArtist(songName, artistName) {
  try {
    // Retrieve an access token
    const data = await spotifyApi.clientCredentialsGrant();
    const accessToken = data.body.access_token;
    console.log(accessToken);

    // Set the access token on the API client
    spotifyApi.setAccessToken(accessToken);

    // Search for the song and artist
    const searchResult = await spotifyApi.searchTracks(`${songName} artist:${artistName}`);
    const track = searchResult.body.tracks.items[0];

    if (track) {
      // Get the album details
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

// Usage example
getAlbumFromSongAndArtist('haifa', 'bigsam').then(albumName => {
  console.log('Album:', albumName);
});

export { getAlbumFromSongAndArtist };
