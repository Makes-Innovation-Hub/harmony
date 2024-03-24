import cron from "node-cron";
import mongoose from "mongoose";
import Playlist from "../models/Playlist.js";
import { getPlaylistData } from "../controllers/playlistController.js";
import axios from "axios";

// Maybe make the schedule time a variable and save last update time somewhere to make sure if the server restarts it doesnt affect the schedule

// Schedule the task to run every week
cron.schedule("0 0 * * 0", async () => {
  try {
    // Get all playlists from the database
    const playlists = await Playlist.find();

    // Update each playlist's data
    for (const playlist of playlists) {
      const response = await axios.get(
        `http://localhost:5000/api/v1/playlist/playlistData/?id=${playlist.playlistId}&lang=HE&update=true`
      );

      // await getPlaylistData(
      //   { query: { id: playlist.playlistId, lang: "HE" } },
      //   null
      // );
    }

    console.log("Playlist data updated successfully");
  } catch (error) {
    console.error("Error updating playlist data:", error);
  }
});
