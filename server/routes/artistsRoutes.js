import express from "express";
import artistSearchRoute from "../routes/artistSearchRoute.js";
import { getArtists, createArtist } from "../controllers/artistsController.js";
const artistsRouter = express.Router();

artistsRouter.route("/").get(getArtists).post(createArtist);
artistsRouter.use("/", artistSearchRoute);

export default artistsRouter;
