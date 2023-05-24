import express from 'express'

import { translatingFunction } from '../utils/translatingFunction'

const translationRouter = express.Router()

translationRouter.route('/').get(translatingFunction)

export default translationRouter