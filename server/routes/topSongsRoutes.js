import express from 'express'
import { getArtists, createArtist } from '../controllers/artistsController.js'
const topSongsRouter = express.Router()

topSongsRouter
.route("/")
.get(getArtists)
.post(createArtist)

export default topSongsRouter