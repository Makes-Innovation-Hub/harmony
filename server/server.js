import cors from 'cors'
import dotenv from "dotenv";
import express from "express";
import { fileURLToPath } from "url";
import { join, dirname } from "path";
import {connectDB, closeDBConnection} from "./config/db.js";
import scrapeTopArabicSongs from "./scrapping/scrappingTopArabicSongs.js";
import scrapeTopHebrewSongs from "./scrapping/scrappingTopHebrewSongs.js";


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.use(cors())
dotenv.config({ path: join(__dirname, "./config/config.env") });

app.get("/topArabicSongs", scrapeTopArabicSongs)
app.get("/topHebrewSongs", scrapeTopHebrewSongs)

const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV

let server;
connectDB().then(() => {
  server = app.listen(
    PORT,
    console.log(
      `Server is running in ${NODE_ENV} mode on port ${PORT}`
        
    )
  );
});

process.on("unhandledRejection", (err, promise) => {
  console.error(`Error: ${err.message}`);
  server.close(() => process.exit(1));
  closeDBConnection()
});


