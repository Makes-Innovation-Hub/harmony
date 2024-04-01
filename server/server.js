import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import session from "express-session";
import passport from "passport";
import logger from "./logger.js";
import { fileURLToPath } from "url";
import { join, dirname } from "path";
import coverArtRouter from "./routes/coverArtRoutes.js";
import { connectDB, closeDBConnection } from "./config/db.js";
import scrappingRoutes from "./routes/scrappingRoutes.js";
import songsRouter from "./routes/songsRoutes.js";
import artistsRouter from "./routes/artistsRoutes.js";
import topSongsRouter from "./routes/topSongsRoutes.js";
import translationRouter from "./routes/translationRoutes.js";
import errorHandler from "./middleware/errorHandler.js";
import lyricsRoute from "./routes/lyricsRoute.js";
import searchRoutes from "./routes/searchRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import CoverSongRoute from "./routes/CoverSongRoute.js";
import playlistRouter from "./routes/playlistRoutes.js";
import loggingMiddleware from "./reqLogger.js";
import commentsRouter from "./routes/coverSongCommentsRoute.js";
import "./cron/updatePlaylistData.js";
import textToSpeechRouter from "./routes/textToSpeechRoute.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: join(__dirname, "./config/config.env") });

const PORT = process.env.SERVER_PORT || 5000;
const NODE_ENV = process.env.NODE_ENV;
const app = express();
const BASE_SERVER_URL = process.env.BASE_SERVER_URL;
const CLIENT_PORT = process.env.CLIENT_PORT;

const allowedOrigins = [
  `${BASE_SERVER_URL}:${CLIENT_PORT}`,
  process.env.PRODUCTION_FRONT_URL,
];

app.set("trust proxy", 1);

const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Invalid origin"));
    }
  },
  credentials: true, // This is important for cookies, authorization headers with HTTPS
};

app.use(cors(corsOptions));

app.use(express.static(join(__dirname, "../client/dist")));
app.use(express.json());
app.use(loggingMiddleware); // Apply loggingMiddleware for all routes

// Configure session management
app.use(
  session({
    secret: process.env.SESSION_SECERT,
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: process.env.NODE_ENV === "production" ? true : "auto",
      sameSite: process.env.NODE_ENV === "production" ? "none" : true,
    },
  })
);

// Initialize Passport and restore authentication state, if any, from the session
app.use(passport.initialize());
app.use(passport.session());

// Define a route to prevent server from sleeping
app.get("/keep-server-awake", (req, res) => {
  res.send("Server is awake!");
});

app.use("/api/v1/songs", songsRouter);
app.use("/api/v1/artists", artistsRouter);
app.use("/api/v1/topSongs", topSongsRouter);
app.use("/api/v1/translate", translationRouter);
app.use("/api/v1/search", searchRoutes);
app.use("/api/v1/cover", coverArtRouter);
app.use("/api/v1/lyrics", lyricsRoute);
app.use("/api/v1/scrap", scrappingRoutes);
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/coverSong", CoverSongRoute);
app.use("/api/v1/playlist", playlistRouter);
app.use("/api/v1/comments", commentsRouter);
app.use("/api/v1/textToSpeech", textToSpeechRouter);

app.get("/", (req, res) => {
  res.sendFile(join(__dirname, "../client/dist", "index.html"));
});
app.use(errorHandler);

connectDB().then(() => {
  app.listen(PORT, () => {
    logger.info(`Server running in ${NODE_ENV} mode on port ${PORT}`);
  });
  // Conditionally import cron job module based on environment
  if (process.env.NODE_ENV === "production") {
    import("./cron/updatePlaylistData.js")
      .then(() => {
        logger.info("Cron job module imported successfully.");
      })
      .catch((error) => {
        logger.error("Error importing cron job module:", error);
      });
  }
});

process.on("unhandledRejection", (err, promise) => {
  logger.error(`Error in server: ${err.message}`);
  closeDBConnection();
  // Optionally, close the server with app.close() if needed
});
