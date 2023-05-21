import express from 'express'
import { getSong, createSong } from "../controllers/songsController.js";

const songsRouter = express.Router()

songsRouter
.route("/")
.get(getSong)
.post(createSong)

export default songsRouter