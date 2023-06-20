import express from "express";
import { getSongs, createSong } from "../controllers/songsController.js";
import searchSongsRouter from "../routes/searchSongs.js";
const songsRouter = express.Router();

songsRouter.route("/").get(getSongs).post(createSong);
songsRouter.use("/", searchSongsRouter);

export default songsRouter;
