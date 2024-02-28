import express from "express";
import {
  clickToAddView,
  deleteCoverSongById,
  getAllCoverSongs,
  getCoverSongById,
  getDeleteAll,
  getMostLikedHebrewCoverSongs,
  postCoverData,
  toggleLike,
} from "../controllers/CoverSongController.js";

import authenticate from "../middleware/authenticate.js";

const router = express.Router();

router.get("/", getAllCoverSongs);
router.get("/:id", getCoverSongById);
router.post("/add", postCoverData);
router.delete("/deleteAll", getDeleteAll);
router.delete("/delete/:id", deleteCoverSongById);
router.put("/view/:id", clickToAddView);
// protected router
router.use(authenticate);
router.put("/like/:id", toggleLike);
router.get("/most-liked", getMostLikedHebrewCoverSongs);

export default router;
