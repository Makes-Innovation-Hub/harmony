import dotenv from "dotenv";
import express from "express";
import {connectDB, closeDBConnection} from "./config/db.js";
import { fileURLToPath } from "url";
import { join, dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

dotenv.config({ path: join(__dirname, "./config/config.env") });

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
  console.error(`Error: ${err.message}`.red);
  server.close(() => process.exit(1));
  closeDBConnection()
});


