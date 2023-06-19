import mongoose from "mongoose";

const TopSongsSchema = new mongoose.Schema(
  {
    date: {
      type: Date,
      default: Date.now,
    },
    language: {
      type: String,
      required: [true, "Please add language"],
      enum: ["hebrew", "arabic"],
    },
    songs: [
      {
        name: {
          type: String,
          required: [true, "please add song name"],
          trim: true,
          maxlength: [100, "Name can not be more than 100 characters"],
        },
        artist: {
          type: String,
          required: [true, "please add artist name"],
          trim: true,
          maxlength: [100, "Artist name can not be more than 100 characters"],
        },
        imgURL: {
          type: String,
          trim: true,
        },

      },
    ],
  },
  {
    toJSON: {
      transform(_, ret) {
        delete ret.__v;
      },
    },
    toObject: {
      transform(_, ret) {
        delete ret.__v;
      },
    },
  }
);

export default mongoose.model("TopSongs", TopSongsSchema);
