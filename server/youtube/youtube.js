import { GoogleSearch } from "google-search-results-nodejs";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import { join, dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: join(__dirname, "../config/config.env") });

const serapApiKey = process.env.SERAP_API_KEY;

const getYoutubeIframe = async (req, res) => {
  const search = new GoogleSearch(serapApiKey);

  const { songName, artistName } = req.body;
  console.log("req body is", req.body);

  const params = {
    engine: "youtube",
    search_query: `${songName} ${artistName}`,
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
    res.json({ songId: youtubeUrlID });
  };

  // Show result as JSON
  search.json(params, callback);
};
export default getYoutubeIframe;
