import asyncHandler from "../middleware/asyncHandler.js";

import Song from "../models/Song.js";
import Artist from "../models/Artist.js";

import { translateLyricsByOpenAi } from "./openAiTranslation.js";

let artistId;

export const searchArtistSong = async (songName, artistName) => {
  try {
    const artist = await Artist.findOne({
      $or: [
        { "name.hebrew": artistName },
        { "name.arabic": artistName },
        { "name.english": artistName },
      ],
    })
      .populate({
        path: "songs",
      })
      .exec();

    if (!artist) {
      throw new Error("Artist not found");
    }
    artistId = artist._id;

    const songArray = artist.songs.filter(
      (song) =>
        song.name.hebrew === songName ||
        song.name.english === songName ||
        song.name.arabic === songName
    );
    return songArray[0];
  } catch (error) {
    throw new Error(`Error finding artist's song: ${error.message}`);
  }
};

export const translatingFunction = asyncHandler(async (req, res, next) => {
  const originalLanguage = req.body.originalLanguage;
  const artistName = req.body.artistName;
  const lyrics = req.body.lyrics;
  const targetLanguage = req.body.targetLanguage;
  const songName = req.body.songName;

  const song = await searchArtistSong(songName, artistName);

  if (song && song.lyrics[targetLanguage]) {
    res.status(200).json({
      success: true,
      data: song.lyrics[targetLanguage],
    });
  } else {
    const targetLyrics = await translateLyricsByOpenAi(
      lyrics,
      originalLanguage,
      targetLanguage
    );
    if (targetLyrics) {
      // Store the translated lyrics in the database
      if (song) {
        // Update the existing song record
        song.lyrics[targetLanguage] = targetLyrics;
        await song.save();
      } else {
        // Create a new song record
        const newSong = new Song({
          artist: artistId,
          originalLang: originalLanguage,
          lyrics: {
            [targetLanguage]: targetLyrics,
            [originalLanguage]: lyrics,
          },
        });
        await newSong.save();
      }

      res.status(200).json({
        success: true,
        data: targetLyrics,
      });
    } else {
      res.status(500).json({
        success: false,
        error: "Failed to translate lyrics.",
      });
    }
  }
});
