import dotenv from 'dotenv';
import axios from 'axios';
dotenv.config({ path: './config/config.env' });

async function getLyricsForSong(songName, artistName) {
  try {
    const response = await axios.get('https://api.genius.com/search', {
      params: {
        q: `${songName} ${artistName}`,
      },
      headers: {
        Authorization: `Bearer ${process.env.GENIUS_API_KEY}`,
      },
    });
    const searchResult = response.data.response.hits[0];
    // console.log(searchResult)
    if (searchResult) {
      const songId = searchResult.result.id;
      // console.log(songId)
      const songResponse = await axios.get(`https://api.genius.com/songs/${songId}`, {
        headers: {
          Authorization: `Bearer ${process.env.GENIUS_API_KEY}`,
        },
      });
      const lyricsData = songResponse.data.response.song;
      if (lyricsData) {
        return lyricsData.lyrics;
      } else {
        throw new Error('Lyrics not found.');
      }
    } else {
      throw new Error('Song not found.');
    }
  } catch (error) {
    console.error('Error:', error.message);
  }
}

async function exampleUsage() {
  try {
    const lyrics = await getLyricsForSong('Unicorn', 'Noa Kirel');
    console.log('Lyrics:', lyrics);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

exampleUsage();

export { getLyricsForSong };
