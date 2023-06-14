import fs from "fs";
import mongoose from "mongoose";
import dotenv from "dotenv";

import { fileURLToPath } from "url";
import { join, dirname } from "path";

import Artist from "./models/Artist.js";
import Song from "./models/Song.js";
import TopSongs from "./models/TopSongs.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: join(__dirname, "./config/config.env") });

mongoose.connect(process.env.MONGO_URI_DEVELOPMENT, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const artist = JSON.parse(
  fs.readFileSync(new URL("./data/artist.json", import.meta.url), "utf-8")
);

const song = JSON.parse(
  fs.readFileSync(new URL("./data/song.json", import.meta.url), "utf-8")
);

const topSongs = JSON.parse(
  fs.readFileSync(new URL("./data/topSongs.json", import.meta.url), "utf-8")
);

// Import into DB
const importData = async () => {
  try {
    await Artist.create(artist);
    await Song.create(song);
    await TopSongs.create(topSongs);

    console.log("Data Imported...");
    process.exit();
  } catch (err) {
    console.error(err);
  }
};

// Delete data
const deleteData = async () => {
  try {
    await Artist.deleteMany();
    await Song.deleteMany();
    await TopSongs.deleteMany();

    console.log("Data Destroyed...");
    process.exit();
  } catch (err) {
    console.error(err);
  }
};

if (process.argv[2] === "-i") {
  importData();
} else if (process.argv[2] === "-d") {
  deleteData();
}
