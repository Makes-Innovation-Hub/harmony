import asyncHandler from "../middleware/asyncHandler.js";

import Song from "../models/Song.js";

import { translateLyricsByOpenAi } from "./openAiTranslation.js";

async function searchSongByLyrics(originalLang, lyrics) {
    try {
      const query = {
        originalLang: originalLang,
        $or: [
          { 'lyrics.hebrew': lyrics },
          { 'lyrics.arabic': lyrics },
          { 'lyrics.english': lyrics }
        ]
      };
  
      const song = await Song.findOne(query);
      return song;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

export const translatingFunction = asyncHandler(async (req, res, next) => {
    const originalLanguage = req.body.originalLanguage
    const artist = req.body.artist
    const lyrics = req.body.lyrics
    const targetLanguage = req.body.targetLanguage

    const song = await searchSongByLyrics(originalLanguage, lyrics)

    if (song && song.lyrics[targetLanguage]) {
        res.status(200).json({
            success: true,
            data: song.lyrics[targetLanguage]
        })
    } else {
        const targetLyrics = await translateLyricsByOpenAi(lyrics, originalLanguage, targetLanguage)
        if (targetLyrics) {
            // Store the translated lyrics in the database
            if (song) {
              // Update the existing song record
              song.lyrics[targetLanguage] = targetLyrics;
              await song.save();
            } else {
              // Create a new song record
              const newSong = new Song({
                artist: artist,
                originalLang: originalLanguage,
                lyrics: {
                  [targetLanguage]: targetLyrics,
                  [originalLanguage]: lyrics
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


