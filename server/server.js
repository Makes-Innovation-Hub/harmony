import cors from "cors";
import dotenv from "dotenv";
import express from "express";
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

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV;
const app = express();

dotenv.config({ path: join(__dirname, "./config/config.env") });

app.use(cors());
app.use(express.static(join(__dirname, "../client/dist")));

// Middlewares
app.use(express.json());
app.use(loggingMiddleware); // Apply loggingMiddleware for all routes
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

app.get("/", (req, res) => {
  res.sendFile(join(__dirname, "../client/dist", "index.html"));
});
app.use(errorHandler);

connectDB();

app.listen(
  PORT,
  logger.info(`Server running in ${NODE_ENV} mode on port ${PORT}`)
);

process.on("unhandledRejection", (err, promise) => {
  logger.error(`Error in server: ${err.message}`);
  closeDBConnection();
  // app.close(() => process.exit(1));
});
