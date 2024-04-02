import mongoose from "mongoose";
import Artist from "./Artist.js";
import asyncHandler from "../middleware/asyncHandler.js";

const SongSchema = new mongoose.Schema(
  {
    name: {
      hebrew: {
        type: String,
        required: [true, "please add song name in Hebrew"],
        trim: true,
        maxlength: [100, "Name can not be more than 100 characters"],
      },
      arabic: {
        type: String,
        required: [true, "please add song name in Arabic"],
        trim: true,
        maxlength: [100, "Name can not be more than 100 characters"],
      },
      english: {
        type: String,
        required: [true, "please add song name in English"],
        trim: true,
        maxlength: [100, "Name can not be more than 100 characters"],
      },
    },
    lyrics: {
      hebrew: {
        type: String,
        trim: true,
      },
      arabic: {
        type: String,
        trim: true,
      },
      english: {
        type: String,
        trim: true,
      },
    },
    originalLang: {
      type: String,
    },
    artist: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Artist",
    },

    // This field needs to be refractured:
    coverArt: {
      type: String,
    },
    album: {
      type: String,
    },
    youtubeURL: {
      type: String,
    },
    coverSong: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "CoverSong",
      },
    ],
    songId: {
      type: String,
      unique: true,
    },
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

SongSchema.pre("save", async function asyncHandler(req, res, next) {
  const artist = await Artist.findById(this.artist);
  if (!artist) {
    return next(new ErrorResponse(`Artist not found`, 404));
  }
  artist.songs.push(this._id);
  await artist.save();
});

export default mongoose.model("Song", SongSchema);
