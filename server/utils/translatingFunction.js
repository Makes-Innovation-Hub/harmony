import asyncHandler from "../middleware/asyncHandler";

import Song from "../models/Song.js";

import { translateLyricsByOpenAi } from "./openAiTranslation";

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

    const lyricsTranslation = await searchSongByLyrics(originalLanguage, lyrics)

    if (lyricsTranslation && lyricsTranslation.lyrics.targetLanguage !== undefined) {
        res.status(200).json({
            success: true,
            data: lyricsTranslation.lyrics.targetLanguage
        })
    } else {
        const targetLyrics = await translateLyricsByOpenAi(lyrics, originalLanguage, targetLanguage)
        if (targetLyrics) {
            // Store the translated lyrics in the database
            if (lyricsTranslation) {
              // Update the existing song record
              lyricsTranslation.lyrics[targetLanguage] = targetLyrics;
              await lyricsTranslation.save();
            } else {
              // Create a new song record
              const newSong = new Song({
                originalLang: originalLanguage,
                lyrics: {
                  [targetLanguage]: targetLyrics,
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


