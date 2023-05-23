import cors from 'cors'
import dotenv from "dotenv";
import express from "express";
import { fileURLToPath } from "url";
import { join, dirname } from "path";
import {connectDB, closeDBConnection} from "./config/db.js";
import scrappingRoutes from './routes/scrappingRoutes.js'
import SongRoute from './routes/songRoutes.js'


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.use(cors())


dotenv.config({ path: join(__dirname, "./config/config.env") });


app.use("/api/v1/", scrappingRoutes)
app.use('/', SongRoute);

const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV

let server;

connectDB()

app.listen(
  PORT,
  console.log(`Server running in ${NODE_ENV}
  mode on port ${PORT}`)
);



process.on("unhandledRejection", (err, promise) => {
  console.error(`Error: ${err.message}`);
  server.close(() => process.exit(1));
  closeDBConnection()
});


