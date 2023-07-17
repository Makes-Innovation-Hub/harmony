import express from "express";
import generateYoutubeId from "../youtube/youtube.js";

const youtubeRoute = express.Router();

youtubeRoute.route("/").post(generateYoutubeId);

export default youtubeRoute;
