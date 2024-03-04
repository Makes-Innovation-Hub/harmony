import mongoose from "mongoose";
const CommentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const CoverComments = mongoose.model("CoverComments", CommentSchema);
export default CoverComments;
