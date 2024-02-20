import { Router } from "express";
import {
  getChannelProfilePic,
  getPlaylistData,
} from "../controllers/playlistController.js";

const router = Router();

// GET localhost:5000/api/v1/playlist/data/?id=PLAYLIST_ID
router.get("/playlistData", getPlaylistData);

// GET localhost:5000/api/v1/playlist/profilePic/?id=CHANNEL_ID
router.get("/profilePic", getChannelProfilePic);

export default router;
