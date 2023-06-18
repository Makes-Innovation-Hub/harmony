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
import authRouter from "./routes/authRoute.js";
import { verifyToken } from "./controllers/authController.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV;
const app = express();

dotenv.config({ path: join(__dirname, "./config/config.env") });

app.use(cors());
app.use(express.static(join(__dirname, "../client/dist")));

app.get("/homePage", (req, res) => {
  res.sendFile(join(__dirname, "../client/dist", "index.html"));
});

//Middlewares
app.use(express.json());
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/songs", verifyToken, songsRouter);
app.use("/api/v1/artists", verifyToken, artistsRouter);
app.use("/api/v1/topSongs", verifyToken, topSongsRouter);
app.use("/api/v1/translate", verifyToken, translationRouter);
app.use("/api/v1/search", verifyToken, searchRoutes);
app.use("/api/v1/cover", verifyToken, coverArtRouter);
app.use("/api/v1/lyrics", verifyToken, lyricsRoute);
app.use("/api/v1/scrap", verifyToken, scrappingRoutes);
app.use(errorHandler);

connectDB();

app.listen(
  PORT,
  logger.info(`Server running in ${NODE_ENV}
  mode on port ${PORT}`)
);

process.on("unhandledRejection", (err, promise) => {
  logger.error(`Error in server: ${err.message}`);
  closeDBConnection();
  // app.close(() => process.exit(1));
});
