import express from 'express'
import { getSong, createSong } from "../controllers/songsController.js";

const artistsRouter = express.Router()

artistsRouter
.route("/")
.get(getSong)
.post(createSong)

export default artistsRouter