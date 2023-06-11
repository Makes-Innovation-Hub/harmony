import express from "express";

import { translatingFunction } from "../utils/translatingFunction.js";
import { translateBySongName } from "../utils/translationBySongName.js";

const translationRouter = express.Router();

translationRouter.route("/").post(translatingFunction).put(translateBySongName);

export default translationRouter;
