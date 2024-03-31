import mongoose from "mongoose";
const CommentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    content: {
      type: String,
    },
    avatar: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const CoverComments = mongoose.model("CoverComments", CommentSchema);
export default CoverComments;
