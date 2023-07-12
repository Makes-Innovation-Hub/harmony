import express from "express";
import getYoutubeIframe from "../youtube/youtube.js";

const youtubeRoute = express.Router();

youtubeRoute.route("/").post(getYoutubeIframe);

export default youtubeRoute;
