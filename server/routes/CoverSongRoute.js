import express from "express";
import {
  clickToAddView,
  deleteCoverSongById,
  getAllCoverSongs,
  getCoverSongById,
  getDeleteAll,
  getTopCoverSongs,
  postCoverData,
  toggleLike,
} from "../controllers/CoverSongController.js";
import isAuthenticated from "../middleware/isAuthenticated.js";

const router = express.Router();
router.get("/top-covers", getTopCoverSongs);

router.get("/", getAllCoverSongs);
router.get("/:id", getCoverSongById);

router.post("/add", postCoverData);
router.delete("/deleteAll", getDeleteAll);
router.delete("/delete/:id", deleteCoverSongById);
router.put("/view/:id", clickToAddView);
// protected router
router.use(isAuthenticated);
router.put("/like/:id", toggleLike);

export default router;
