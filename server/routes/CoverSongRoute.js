import express from "express";
import {
  clickToAddView,
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
router.put("/add-view/:id", clickToAddView);

export default router;
