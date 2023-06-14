import express from "express";
import {
    getTopSongs,
    createTopSongs,
} from "../controllers/topSongsController.js";
const topSongsRouter = express.Router();

topSongsRouter.route("/").get(getTopSongs).post(createTopSongs);

export default topSongsRouter;
