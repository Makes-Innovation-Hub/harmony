import  axios from 'axios';
import dotenv from "dotenv";
dotenv.config({ path: './.env' });
const clientId = process.env.SPOTIFY_CLIENT_ID;
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET; 

async function getAccessToken() {
    const authResponse = await axios({
      url: 'https://accounts.spotify.com/api/token',
      method: 'POST',
      params: {
        grant_type: 'client_credentials'
      },
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString('base64')}`
      }
    });
  
    return authResponse.data.access_token;
  }
  async function getLyrics(artist, song) {
    try {
      const response = await axios.get(`https://api.lyrics.com/v1/${encodeURIComponent(artist)}/${encodeURIComponent(song)}`);
      const lyrics = response.data.lyrics;
      console.log(lyrics)
      return lyrics;
    } catch (error) {
      console.error('Error:', error.message);
      throw new Error('Failed to retrieve lyrics');
    }
  }

   export {getAccessToken,getLyrics}