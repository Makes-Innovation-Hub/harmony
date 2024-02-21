import dotenv from "dotenv";
dotenv.config();
import { playlistData } from "../constants/playlistData.js";

// GET Playlist data
// localhost:5000/api/v1/playlist/?id=PLAYLIST_ID
export const getPlaylistData = async (req, res) => {
  // Extract id from query params and verify that it was provided
  const { id } = req.query;
  if (!id) {
    res.status(400).send("ERROR: id is required");
  }

  // Get the YOUTUBE_API_KEY from process.env and check if it's not null
  const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
  if (!YOUTUBE_API_KEY) {
    res.status(400).send("ERROR: YOUTUBE_API_KEY is required");
  }

  try {
    // Fetch playlist items (videos) with maxResults = 10
    const playlistItemsResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${id}&maxResults=10&key=${YOUTUBE_API_KEY}`
    );

    // Check if fetching failed
    if (!playlistItemsResponse.ok) {
      throw new Error("Failed to fetch playlist information");
    }
    // Convert the fetched data into a json object
    const playlistItemsData = await playlistItemsResponse.json();

    // Make sure the playlist is not empty
    if (!playlistItemsData.items || playlistItemsData.items.length === 0) {
      throw new Error("Playlist not found or empty");
    }

    // Extract relevant information from the response
    /*const playlistInfo = {
      id: id, //playlist id
      items: playlistItemsData.items.map((item) => {
        return {
          id: item.snippet.resourceId.videoId, //video id
          title: item.snippet.title, //video title
          thumbnailUrl: item.snippet.thumbnails.standard.url, //video thumbanil url
          channelTitle: item.snippet.videoOwnerChannelTitle, //channel title
          channelId: item.snippet.channelId, //channelId
        };
      }),
    };*/

    const itemsWithProfilePic = await Promise.all(
      playlistItemsData.items.map(async (item) => {
        const profilePicUrl = await fetchChannelProfilePic(
          item.snippet.videoOwnerChannelId
        );
        return {
          videoId: item.snippet.resourceId.videoId,
          title: item.snippet.title,
          thumbnailUrl: item.snippet.thumbnails.standard.url,
          channelTitle: item.snippet.videoOwnerChannelTitle,
          channelId: item.snippet.videoOwnerChannelId,
          profilePicUrl: profilePicUrl,
        };
      })
    );

    // Send the playlist data in the response
    // res.status(200).json(playlistInfo);
    res.status(200).json(itemsWithProfilePic);
  } catch (error) {
    console.error("Error fetching playlist data:", error);
    res.status(500).send("Internal Server Error");
  }
};

// GET profilePicUrl of the channel to be in place of the artist picture
// GET localhost:5000/api/v1/playlist/profilePic/?id=CHANNEL_ID
export const getChannelProfilePic = async (req, res) => {
  // extract id from request query params and make sure it's provided
  const { id } = req.query;
  if (!id) {
    return res.status(400).send("ERROR: Channel ID is required");
  }

  // set the YOUTUBE_API_KEY to the value in the .env file and check that it's not null
  const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
  if (!YOUTUBE_API_KEY) {
    return res.status(400).send("ERROR: YOUTUBE_API_KEY is required");
  }

  try {
    // Fetch the channel information
    const channelResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${id}&key=${YOUTUBE_API_KEY}`
    );
    // Check if fetching failed
    if (!channelResponse.ok) {
      throw new Error("Failed to fetch channel information");
    }
    const channelData = await channelResponse.json();

    // Check if channel exists
    if (!channelData.items || channelData.items.length === 0) {
      throw new Error("Channel not found");
    }

    // get the profile pic url from the response (default size)
    const profilePicUrl = channelData.items[0].snippet.thumbnails.default.url;

    // Send profilePicUrl
    res.status(200).json({ profilePicUrl });
  } catch (error) {
    console.error("Error fetching channel profile picture:", error);
    res.status(500).send("Internal Server Error");
  }
};

// @des      Get all the static playlistsData
// @route    GET /api/v1/playlist/allPlaylistData
// @access   Public
export const getAllPlaylistsData = (req, res) => {
  const playlists = playlistData;
  res.send(playlists);
};

//NEW

// Function to fetch profile picture URL for a channel ID
const fetchChannelProfilePic = async (channelId) => {
  const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
  if (!YOUTUBE_API_KEY) {
    throw new Error("YOUTUBE_API_KEY is required");
  }

  try {
    const channelResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=${YOUTUBE_API_KEY}`
    );

    if (!channelResponse.ok) {
      throw new Error("Failed to fetch channel information");
    }

    const channelData = await channelResponse.json();

    if (!channelData.items || channelData.items.length === 0) {
      throw new Error("Channel not found");
    }

    return channelData.items[0].snippet.thumbnails.default.url;
  } catch (error) {
    console.error("Error fetching channel profile picture:", error);
    throw error;
  }
};
