import { MusicBrainzApi } from 'musicbrainz-api';
import axios from 'axios'

// export const mbApi = new MusicBrainzApi({
//   appName: 'my-app',
//   appVersion: '0.1.0',
//   appContactInfo: 'user@mail.org'
// });


// const artist = await mbApi.lookupEntity('artist', 'ab2528d9-719f-4261-8098-21849222a0f2');
// const label = await mbApi.lookupLabel('25dda9f9-f069-4898-82f0-59330a106c7f');


const coverArt = async () => {
  try {
    const response = await axios.get("http://coverartarchive.org/release/76df3287-6cda-33eb-8e9a-044b5e15ffdd");
    console.log(response.data)
  } catch (error) {
    console.error(error);
  } 
};

coverArt()






