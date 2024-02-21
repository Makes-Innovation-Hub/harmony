import express from "express";
import {
  getSongs,
  createSong,
  getFullSongData,
  findSongById,
} from "../controllers/songsController.js";

const songsRouter = express.Router();

songsRouter.route("/").get(getSongs).post(createSong).put(getFullSongData);
songsRouter.get("/find/:id", findSongById);

export default songsRouter;
