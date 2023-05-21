import express from 'express'
import { getSong } from "../controllers/songsController.js";

const songsRouter = express.Router()

songsRouter.route("/").get(getSong)

export default songsRouter