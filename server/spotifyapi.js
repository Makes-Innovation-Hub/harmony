import SpotifyWebApi from 'spotify-web-api-node';
import dotenv from 'dotenv';
import pkg from "openai";
const { Configuration, OpenAIApi } = pkg;
dotenv.config({ path: './config/config.env' });
const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
});
const init = () => {
  const config = new Configuration({
    apiKey: process.env.OPEN_AI_API_KEY,
  });
  return new OpenAIApi(config);
};

const openai = init();
async function translateArtistName(artistName) {
  try {
    const prompt = `translate from hebrow to english: "${artistName}"`;
    const response = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
    });

    const translatedName = response.data.choices[0].message.content;
    return translatedName.trim();
  } catch (error) {
    throw new Error('Failed to process prompt: ' + error.message);
  }
}
async function getAlbumFromSongAndArtist(songName, artistName) {
  try {
    const translatedArtistName = await translateArtistName(artistName);
    const data = await spotifyApi.clientCredentialsGrant();
    const accessToken = data.body.access_token;
    spotifyApi.setAccessToken(accessToken);
    const searchResult = await spotifyApi.searchTracks(`${songName} artist:${translatedArtistName}`);
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
      const translatedArtistName = await translateArtistName(artistName);
      const data = await spotifyApi.clientCredentialsGrant();
      const accessToken = data.body.access_token;
      spotifyApi.setAccessToken(accessToken);
      const searchResult = await spotifyApi.searchTracks(`${songName} artist:${translatedArtistName}`);
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
    const albumName = await getAlbumFromSongAndArtist('לירז', 'סטטיק');
    console.log('Album:', albumName);

    const coverArt = await getCoverArtForSong('לירז', 'סטטיק');
    console.log('Cover Art:', coverArt);
  } catch (error) {
    console.error('Error:', error.message);
  }
}
exampleUsage();
export { getAlbumFromSongAndArtist, getCoverArtForSong };