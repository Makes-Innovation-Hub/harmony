import express from "express";
import { getTopSongs } from "../controllers/topSongsController.js";
const topSongsRouter = express.Router();

topSongsRouter.route("/").get(getTopSongs);

export default topSongsRouter;
