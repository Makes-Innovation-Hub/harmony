import mongoose from "mongoose";
const CoverSongSchema = new mongoose.Schema(
  {
    youtubeUrl: {
      type: String,
      required: [true, "Please add coverSong link "],
    },
    backgroundUrl: String,

    coverArtistName: {
      type: String,
      required: [true, "Please add name of the artist"],
      min: [6, "Artist name is too short"],
      max: 18,
      trim: true,
    },

    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],

    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "CoverComments",
      },
    ],

    views: {
      type: Number,
      default: 0,
    },

    originalLanguage: String,

    originalArtist: String,

    originalSongCover: String,

    originalSongName: String,

    originalSongId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Song",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("CoverSong", CoverSongSchema);
