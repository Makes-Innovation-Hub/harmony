import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { fileURLToPath } from "url";
import { join, dirname } from "path";
import SongRoute from './routes/songRoutes.js'
import { connectDB, closeDBConnection } from "./config/db.js";
import scrappingRoutes from "./routes/scrappingRoutes.js";
import songsRouter from "./routes/songsRoutes.js";
import artistsRouter from "./routes/artistsRoutes.js";
import topSongsRouter from "./routes/topSongsRoutes.js";
import errorHandler from "./middleware/errorHandler.js";


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config({ path: join(__dirname, "./config/config.env") });

const app = express();
app.use(cors());


dotenv.config({ path: join(__dirname, "./config/config.env") });
app.use("/api/v1/", scrappingRoutes);


app.use(express.json());

app.use("/api/v1/", scrappingRoutes);
app.use("/api/v1/harmony/songs", songsRouter);
app.use("/api/v1/harmony/artists", artistsRouter);
app.use("/api/v1/harmony/topSongs", topSongsRouter);
app.use('/', SongRoute);

app.use(errorHandler);


const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV;

let server;

connectDB();

app.listen(
  PORT,
  console.log(`Server running in ${NODE_ENV}
  mode on port ${PORT}`)
);

process.on("unhandledRejection", (err, promise) => {
  console.error(`Error: ${err.message}`);
  closeDBConnection();
  server.close(() => process.exit(1));
});
export default app;
