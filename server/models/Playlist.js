import mongoose from "mongoose";

const playlistSchema = new mongoose.Schema({
  playlistId: { type: String, required: true, unique: true },
  items: [
    {
      videoId: String,
      title: String,
      songName3Lang: {
        hebrew: String,
        arabic: String,
        english: String,
      },
      thumbnailUrl: String,
      channelTitle: String,
      channelId: String,
      profilePicUrl: String,
    },
  ],
  updatedAt: { type: Date, default: Date.now },
});

const Playlist = mongoose.model("Playlist", playlistSchema);

export default Playlist;
