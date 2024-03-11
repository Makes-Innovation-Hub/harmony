import express from "express";
import {
  deleteCommentById,
  getAllComments,
  postComments,
} from "../controllers/commentsController.js";

const router = express.Router();

router.post("/add/:id", postComments);
router.get("/", getAllComments);
router.delete("/delete/:commentId/from/:coverSongId", deleteCommentById);

export default router;
