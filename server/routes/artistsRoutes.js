import express from 'express'
import { getArtists, createArtist } from '../controllers/artistsController.js'
const artistsRouter = express.Router()

artistsRouter
.route("/")
.get(getArtists)
.post(createArtist)

export default artistsRouter