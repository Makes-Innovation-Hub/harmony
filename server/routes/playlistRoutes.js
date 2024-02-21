import { Router } from "express";
import {
  getAllPlaylistsData,
  getChannelProfilePic,
  getPlaylistData,
} from "../controllers/playlistController.js";

const router = Router();

// GET localhost:5000/api/v1/playlist/playlistData?id=PLAYLIST_ID
router.get("/playlistData", getPlaylistData);

// GET localhost:5000/api/v1/playlist/profilePic/?id=CHANNEL_ID
router.get("/profilePic", getChannelProfilePic);

router.get("/allPlaylistData", getAllPlaylistsData);

export default router;
