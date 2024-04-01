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
        type: Object,
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
        coverArt: {
          type: String,
          trim: true,
        },
        songId: {
          type: String,
          required: [true, "songId is required!"],
          unique: [true, "This song id is already in use"],
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

TopSongsSchema.pre("save", function (next) {
  this.songs.forEach((song, index) => {
    if (!song.songId) {
      // Generate a unique songId for each song. This example uses MongoDB's ObjectId
      // but you can replace this with any other unique ID generation strategy that suits your needs
      song.songId = new mongoose.Types.ObjectId().toString();
    }
  });
  next();
});

export default mongoose.model("TopSongs", TopSongsSchema);
