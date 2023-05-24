import express from 'express'

import { translatingFunction } from '../utils/translatingFunction.js'

const translationRouter = express.Router()

translationRouter.route('/').get(translatingFunction)

export default translationRouter