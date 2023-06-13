import asyncHandler from "../middleware/asyncHandler.js";

import Song from "../models/Song.js";

// import getLyricsFromApi from '../utils/.js'

import {
  translatingFunction,
  searchArtistSong,
} from "./translatingFunction.js";

export const translateBySongName = asyncHandler(async (req, res, next) => {
  const songName = req.body.songName;
  const artistName = req.body.artistName;
  const originalLanguage = req.body.originalLanguage;
  const targetLanguage = req.body.targetLanguage;

  const targetSong = await searchArtistSong(songName, artistName);

  if (targetSong && targetSong.lyrics[targetLanguage]) {
    res.status(200).json({
      success: true,
      data: targetSong.lyrics[targetLanguage],
    });
  } else {
    const targetLyrics = await getLyricsFromApi(songName, artistName);
    if (targetLyrics) {
      const req = {
        body: {
          originalLanguage: originalLanguage,
          artistName: artistName,
          lyrics: targetLyrics,
          targetLanguage: targetLanguage,
          songName: songName,
        },
      };

      translatingFunction(req);
    } else {
      res.status(500).json({
        success: false,
        error: "Failed to get lyrics for song.",
      });
    }
  }
});
