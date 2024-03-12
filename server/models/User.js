import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name"],
  },
  email: {
    type: String,
    required: [true, "Please provide an email"],
    unique: true,
  },
  avatar: {
    type: String,
    required: false,
  },
  googleId: {
    type: String,
  },
  isGoogleAccount: {
    type: Boolean,
    default: false,
  },
  accessToken: {
    type: String,
    required: false,
  },
  refreshToken: {
    type: String,
    required: false,
  },
  facebookId: String, // Add this for Facebook authentication
  isFacebookAccount: {
    type: Boolean,
    default: false,
  },
  appleId: String,
  isAppleAccount: {
    type: Boolean,
    default: false,
  },
  likedCoverSongs: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "CoverSong",
  },
});

const User = mongoose.model("User", userSchema);

export default User;
