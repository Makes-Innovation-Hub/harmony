import express from "express";
import { getSongs, createSong } from "../controllers/songsController.js";

const songsRouter = express.Router();

songsRouter.route("/").get(getSongs).post(createSong);

export default songsRouter;
