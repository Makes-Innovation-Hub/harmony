import express from "express";
import {
  clickToAddView,
  deleteCoverSongById,
  getAllCoverSongs,
  getCoverSongById,
  getDeleteAll,
  postCoverData,
} from "../controllers/CoverSongController.js";

const router = express.Router();

router.get("/", getAllCoverSongs);
router.get("/:id", getCoverSongById);
router.post("/add", postCoverData);
router.delete("/deleteAll", getDeleteAll);
router.delete("/delete/:id", deleteCoverSongById);
router.put("/view/:id", clickToAddView);

export default router;
