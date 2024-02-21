import express from "express";
import {
  getSongs,
  createSong,
  getFullSongData,
} from "../controllers/songsController.js";
const songsRouter = express.Router();

songsRouter.route("/").get(getSongs).post(createSong).put(getFullSongData);

export default songsRouter;
