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
    let translatedName = artistName;
    const containsHebrew = /[א-ת]/.test(artistName);

    if (containsHebrew) {
      const prompt = `translate from Hebrew to English: "${artistName}"`;
      const response = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: prompt }],
      });

      translatedName = response.data.choices[0].message.content.trim();
    }

    return translatedName;
  } catch (error) {
    throw new Error('Failed to process prompt: ' + error.message);
  }
}

async function getAlbumFromSongAndArtist(songName, artistName) {
  try {
    let translatedArtistName = artistName;
    const containsHebrew = /[א-ת]/.test(artistName);

    if (containsHebrew) {
      translatedArtistName = '';
    } else {
      translatedArtistName = await translateArtistName(artistName);
    }

    const data = await spotifyApi.clientCredentialsGrant();
    const accessToken = data.body.access_token;
    spotifyApi.setAccessToken(accessToken);

    let searchQuery;
    if (translatedArtistName) {
      searchQuery = `${songName} artist:${translatedArtistName}`;
    } else {
      searchQuery = songName;
    }

    const searchResult = await spotifyApi.searchTracks(searchQuery);
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
    let translatedArtistName = artistName;
    const containsHebrew = /[א-ת]/.test(artistName);

    if (containsHebrew) {
      translatedArtistName = '';
    } else {
      translatedArtistName = await translateArtistName(artistName);
    }

    const data = await spotifyApi.clientCredentialsGrant();
    const accessToken = data.body.access_token;
    spotifyApi.setAccessToken(accessToken);

    let searchQuery;
    if (translatedArtistName) {
      searchQuery = `${songName} artist:${translatedArtistName}`;
    } else {
      searchQuery = songName;
    }

    const searchResult = await spotifyApi.searchTracks(searchQuery);
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
// async function exampleUsage() {
//   try {
//     const albumName = await getAlbumFromSongAndArtist('Hoodie', 'אנה זק, מרגי');
//     console.log('Album:', albumName);

//     const coverArt = await getCoverArtForSong('Hoodie', 'אנה זק, מרגי');
//     console.log('Cover Art:', coverArt);
//   } catch (error) {
//     console.error('Error:', error.message);
//   }
// }
// exampleUsage();
export { getAlbumFromSongAndArtist, getCoverArtForSong };