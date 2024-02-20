import dotenv from "dotenv";
dotenv.config();

export const getPlaylistData = async (req, res) => {
  const { id } = req.body;
  if (!id) {
    res.status(400).send("ERROR: id is required");
  }

  const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
  if (!YOUTUBE_API_KEY) {
    res.status(400).send("ERROR: YOUTUBE_API_KEY is required");
  }

  /*
  // playlistData is an object that contains playlist ID, an array of items objects which contains the names of the videos in the playlist, their thumbnailURL which is the high res thumbnail url from the response, and video's channel name, videos channel profile pic url, and channelID,  
  // Since there is paging, when we fetch the playlistItems we get an array of 5 objects and if there's more than 5 there's a nextPageToken, so if the song has more than 5 also get the videos from the next page (so in total i want the max number of videos to be returned is 10 videos/items if there's only 5 vids or less no need to do next page token check)
  const playlistData = {}

    // CONTINUE WITH THE CURRENT CODE

    // Replace this with 
  res.status(200).send(`ID: ${id}\nKEY:${YOUTUBE_API_KEY}`);

  */

  try {
    // Fetch playlist items (videos)
    const playlistItemsResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${id}&key=${YOUTUBE_API_KEY}`
    );
    console.log("playlistItemsResponse", playlistItemsResponse);
    if (!playlistItemsResponse.ok) {
      throw new Error("Failed to fetch playlist information");
    }
    const playlistItemsData = await playlistItemsResponse.json();

    if (!playlistItemsData.items || playlistItemsData.items.length === 0) {
      throw new Error("Playlist not found or empty");
    }

    // Fetch playlist items (videos)
    // const playlistItemsResponse = await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${id}&key=${YOUTUBE_API_KEY}`);
    // if (!playlistItemsResponse.ok) {
    //   throw new Error('Failed to fetch playlist items');
    // }
    // const playlistItemsData = await playlistItemsResponse.json();

    // Extract relevant information from the responses
    const playlistInfo = {
      id: id, //playlist id
      items: playlistItemsData.items.map((item) => {
        return {
          id: item.id, //video id
          title: item.snippet.title, //video title
          thumbnailUrl: item.snippet.thumbnails.standard.url, //video thumbanil url
          channelTitle: item.snippet.videoOwnerChannelTitle, //channel title
          channelId: item.snippet.channelId, //channelId
        };
      }),
      // allItems: playlistItemsData.items,
    };

    // Send the playlist data in the response
    res.status(200).json(playlistInfo);
  } catch (error) {
    console.error("Error fetching playlist data:", error);
    res.status(500).send("Internal Server Error");
  }
};
