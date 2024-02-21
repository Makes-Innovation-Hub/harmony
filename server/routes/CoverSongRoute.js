import express from "express";
import {
  deleteCoverSongById,
  getAllCoverSongs,
  getDeleteAll,
  postCoverData,
} from "../controllers/CoverSongController.js";

const router = express.Router();

router.get("/", getAllCoverSongs);
router.post("/add", postCoverData);
router.delete("/deleteAll", getDeleteAll);
router.delete("/delete/:id", deleteCoverSongById);

export default router;
