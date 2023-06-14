import express from 'express'
import { getTopSongs, CreateTopSongsOnStart } from '../controllers/topSongsController.js'
const topSongsRouter = express.Router()

topSongsRouter
.route("/")
.get(getTopSongs)
.post(CreateTopSongsOnStart)

export default topSongsRouter