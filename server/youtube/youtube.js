import { GoogleSearch } from "google-search-results-nodejs";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import { join, dirname } from "path";
import { measureMemory } from "vm";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: join(__dirname, "../config/config.env") });

const serapApiKey = process.env.SERAP_API_KEY;

const generateYoutubeId = (song, artist) => {
  const search = new GoogleSearch(serapApiKey);

  const params = {
    engine: "youtube",
    search_query: `${song} ${artist}`,
  };

  function getYouTubeId(url) {
    var regExp =
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return match && match[7].length == 11 ? match[7] : false;
  }

  const callback = function (data) {
    const youtubeUrl = data["video_results"][0].link;
    const youtubeUrlID = getYouTubeId(youtubeUrl);
    return youtubeUrlID;
  };

  const youtubeSongId = new Promise((res, rej) => {
    search.json(params, (data) => {
      const songId = callback(data);
      res(songId);
    });
  });

  return youtubeSongId;
};

export default generateYoutubeId;
