import cron from "node-cron";
import Playlist from "../models/Playlist.js";
import axios from "axios";
import logger from "../logger.js";
import { serverApiUrl } from "../utils/urls.js";

// 0 minutes,(4 AM),any day of month,any month,Sunday
const SCHEDULE_TIME = "0 4 * * 0";
const MILLISECONDS_IN_WEEK = 7 * 24 * 60 * 60 * 1000;

// Updates all playlists that are saved in the database
async function updatePlaylistsInDB() {
  try {
    // Get all playlists from the database
    const playlists = await Playlist.find();

    // Update each playlist's data
    for (const playlist of playlists) {
      const response = await axios.get(
        `${serverApiUrl}/api/v1/playlist/playlistData/?id=${playlist.playlistId}&update=true`
      );
    }
  } catch (error) {
    console.error("Error updating playlist data:", error);
  }
}

// Schedule the task to run every week
cron.schedule(SCHEDULE_TIME, async () => {
  logger.info("Starting the update process for playlists in the database...");
  updatePlaylistsInDB();
});

// Checks if its been a week since the oldest update for playlists and updates them
async function checkIfNeedsUpdate() {
  try {
    // Get the oldest playlist from the database
    const oldestPlaylist = await Playlist.findOne(
      {},
      {},
      { sort: { updatedAt: 1 } }
    );

    // Check if the time since the oldest playlist was updated is more than or equal to a week
    const now = new Date();
    const oneWeekAgo = new Date(now.getTime() - MILLISECONDS_IN_WEEK); // 7 days ago
    if (oldestPlaylist?.updatedAt < oneWeekAgo) {
      updatePlaylistsInDB();
    }
  } catch (error) {
    console.error("Error checking if playlists need update:", error);
    return false; // Return false in case of an error
  }
}

checkIfNeedsUpdate();
