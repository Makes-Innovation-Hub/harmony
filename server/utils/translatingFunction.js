import asyncHandler from "../middleware/asyncHandler.js";

import Song from "../models/Song.js";
import Artist from "../models/Artist.js";

import { translateLyricsByOpenAi } from "./openAiTranslation.js";

async function searchArtistSong(songName, artist) {
    // try {
    //   const query = {
    //     originalLang: originalLang,
    //     $or: [
    //       { 'lyrics.hebrew': lyrics },
    //       { 'lyrics.arabic': lyrics },
    //       { 'lyrics.english': lyrics }
    //     ]
    //   };
  
    //   const song = await Song.findOne(query);
    //   return song;
    // } catch (error) {
    //   console.error(error);
    //   return null;
    // }
    try {
      const songArtist = await Artist.findById(artist)
      const song = songArtist.find({'songs.name': songName}).populate('songs')
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
    const songName = req.body.songName

    const song = await searchArtistSong(originalLanguage, songName, artist)
    console.log("song is:", song)

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
              console.log('ok....')
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
              console.log('cant save song...')
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


