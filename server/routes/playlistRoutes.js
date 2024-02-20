import { Router } from "express";
import { getPlaylistData } from "../controllers/playlistController.js";

const router = Router();

router.get("/", getPlaylistData);

export default router;
