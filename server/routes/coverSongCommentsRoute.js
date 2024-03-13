import express from "express";
import {
  deleteCommentById,
  getAllComments,
  postComments,
} from "../controllers/commentsController.js";
import isAuthenticated from "../middleware/isAuthenticated.js";

const router = express.Router();

router.get("/", getAllComments);
router.delete("/delete/:commentId/from/:coverSongId", deleteCommentById);
router.use(isAuthenticated);
router.post("/add/:id", postComments);

export default router;
