import cron from "node-cron";
import mongoose from "mongoose";
import Playlist from "../models/Playlist.js";
import { getPlaylistData } from "../controllers/playlistController.js";
import axios from "axios";

// Updates all playlists that are saved in the database
async function updatePlaylistsInDB() {
  try {
    const BASE_SERVER_URL = process.env.BASE_SERVER_URL;
    const SERVER_PORT = process.env.SERVER_PORT;
    const BASE_URL = BASE_SERVER_URL.includes("localhost")
      ? `${BASE_SERVER_URL}:${SERVER_PORT}`
      : BASE_SERVER_URL;

    // Get all playlists from the database
    const playlists = await Playlist.find();

    // Update each playlist's data
    for (const playlist of playlists) {
      const response = await axios.get(
        `${BASE_URL}/api/v1/playlist/playlistData/?id=${playlist.playlistId}&lang=HE&update=true`
      );
    }

    console.log("Playlist data updated successfully");
  } catch (error) {
    console.error("Error updating playlist data:", error);
  }
}

// Schedule the task to run every week
cron.schedule("0 0 * * 0", async () => {
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
    const oneWeekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000); // 7 days ago
    // console.log('oneWeekAgo', oneWeekAgo)
    // console.log('oldestPlaylist.updatedAt < oneWeekAgo', oldestPlaylist.updatedAt < oneWeekAgo)
    if (oldestPlaylist.updatedAt < oneWeekAgo) {
      updatePlaylistsInDB();
    }
  } catch (error) {
    console.error("Error checking if playlists need update:", error);
    return false; // Return false in case of an error
  }
}

checkIfNeedsUpdate();
