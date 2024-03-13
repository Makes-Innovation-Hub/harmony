import CoverSong from "../models/CoverSong.js";
import CoverComments from "../models/CoverSongComments.js";

export const getAllComments = async (req, res, next) => {
  try {
    const comments = await CoverComments.find({});

    res.send(comments);
  } catch (error) {
    next(error);
  }
};

export const postComments = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { content, name } = req.body;
    // if (!content || !name) {
    //   res.status(404);
    //   throw new Error("all fields are required");
    // }

    const createdComment = await CoverComments.create({
      name,
      content,
    });

    const coverSong = await CoverSong.findByIdAndUpdate(
      id,
      { $push: { comments: createdComment } },
      { new: true }
    );

    if (!coverSong) {
      res.status(404);
      throw new Error("coverSong not found");
    }

    res.status(201).send(createdComment);
  } catch (error) {
    next(error);
  }
};

export const deleteCommentById = async (req, res, next) => {
  try {
    const { coverSongId } = req.params;

    const { commentId } = req.params;

    const updatedCoverSong = await CoverSong.findByIdAndUpdate(
      coverSongId,
      { $pull: { comments: commentId } },
      { new: true }
    );

    await CoverComments.findByIdAndDelete(commentId);

    res.send(updatedCoverSong);
  } catch (error) {
    next(error);
  }
};
