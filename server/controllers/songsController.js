import asyncHandler from "../middleware/asyncHandler.js";
import Song from "../models/Song.js";
import logger from "../logger.js";
import ErrorResponse from "../utils/ErrorResponse.js";
import createObjectFromQuery from "../utils/createObjectFromQuery.js";
import { findOrCreateArtist } from "./artistsController.js";
import detectLanguage from '../utils/detectLang.js';
import { generalTranslation } from '../utils/openAiTranslation.js';
import generateBasicDataObj from '../utils/songOrArtistObj.js';
import { getCoverArtForArtist } from '../spotifyapi.js';
import { scrapGoogleFn } from '../scrapping/scrappingGoogleLyrics.js'


const findSong = async (req) => {
  const filter = createObjectFromQuery(req.body);
  const songsArray = await Song.find(filter).populate("artist");
  if (songsArray.length > 0) return songsArray;
  logger.info(`findSong with song details ${songsArray} found successfully `);
};

const createSongInDB = async (req) => {
  const newSongObject = createObjectFromQuery(req.body);
  logger.info(
    `createSongInDB with song details ${JSON.stringify(newSongObject)}`
  );

  //add song lyrics and translations for names and lyrics. put the scraping function results here!
  const artist = await findOrCreateArtist(
    req.body.artist,
    req.body.name.english,
    req.body.coverArt
  );
  const song = await Song.create({
    name: {
      english: req.body.name.english,
      hebrew: "hard-coded heb",
      arabic: "hard-coded arabic",
    },
    lyrics: {
      english: "hard-coded eng",
      hebrew: "hard-coded heb",
      arabic: "hard-coded arabic",
    },
    coverArt: req.body.coverArt,
    artist: artist._id,
  });
  logger.info(
    `song created successfully with song details: ${JSON.stringify(song)}`
  );
  return song;
};

const findOrCreateSong = async (req) => {
  const songsArray = await findSong(req);
  logger.info(`findOrCreateSong for song arr: ${JSON.stringify(songsArray)}`);

  if (!songsArray) {
    const song = await createSongInDB(req);
    return song;
  }
  // logger.info(`findOrCreateSong successfully for: ${song}`);

  return songsArray[0];
};

// @desc    Get songs by name/artist/album
//@route    GET /api/v1/harmony/songs
// @access  Public
//Use the following structure to query (case insensitive):
// {
//     "name": {
//       "english": "song two"
//   }
// }
const getSongs = asyncHandler(async (req, res, next) => {
  const songsArray = await findSong(req);
  logger.info(`getSongs for song: ${JSON.stringify(songsArray)}`);
  if (!songsArray) {
    return next(new ErrorResponse(`Song not found`, 404));
  }
  res.status(200).json({
    success: true,
    data: songsArray,
  });
});

// @desc    Create a Song
// @route   POST /api/v1/harmony/songs
// @access  dev
const createSong = asyncHandler(async (req, res, next) => {
  const song = await createSongInDB(req);
  logger.info(`createSong with song details: ${JSON.stringify(song)}`);

  if (!song) {
    return next(new ErrorResponse(`Error while creating song`));
  }
  logger.info(
    `song created successfully with song details: ${JSON.stringify(song)}`
  );
  res.status(200).json({
    success: true,
    data: song,
  });
});
















































const getFullSongData = asyncHandler(async (req, res, next) => {
  const { song, artist, coverArt } = req.body;
  logger.info(`getting song full data for song: ${song}, artist: ${artist}`);
  try {
    // look for song data in song collection
    const songs = await Song.find({
      $or: [
        { "name.hebrew": { $regex: song, $options: "i" } },
        { "name.arabic": { $regex: song, $options: "i" } },
        { "name.english": { $regex: song, $options: "i" } },
      ],
    });
    if (songs.length > 0) {
      // if there is - send back
      logger.info(`songs found for song name: ${song}. sending ${songs.length} results`);
      res.json(songs);
    } else {
      // if not - generate song data - > save song in db
      logger.info(`no songs found for song name: ${song}.generating data`);
      const songData = await generateSongData(song, artist, coverArt);
      logger.info(`succeeded generating song data for ${song}`);
      Song.create(songData);
      res.json(songData);
    }

  } catch (error) {
    console.log('error', error);

  }
});

const generateSongData = async function (song, artist, coverArt) {
  let finalSongData = generateBasicDataObj('song');
  // add cover art
  finalSongData.coverArt = coverArt;
  // translate song name - 3 langs
  const nameLang = detectLanguage(song);
  logger.info(`detected that language for the song name: ${song} is: ${nameLang}`);
  const names3langs = await translateText3Lang(song);
  finalSongData = {
    ...finalSongData, ...{ name: names3langs }
  };
  const artistId = await prepareArtist(artist);
  finalSongData.artist = artistId;
  // get lyrics
  const lyricsObj = await prepareLyrics(song, artist);
  console.log('lyricsObj', lyricsObj);
  finalSongData = {
    ...finalSongData, ...{ lyrics: lyricsObj }
  };
  // return song obj
  console.log('finalSongData', finalSongData)
  return finalSongData;
};

const prepareArtist = async (artist) => {
  logger.info(`preparing artist ${artist} before creating song`);
  try {
    // get artist - if no 3 names - generate
    const lang = detectLanguage(artist);
    const names3langs = await translateText3Lang(artist);
    const coverArt = await getCoverArtForArtist(artist);
    logger.info(`checking if artist ${artist} is in db`);
    return findOrCreateArtist(artist, lang, names3langs, coverArt);
  } catch (error) {
    console.log('error prepareArtist', error);
  }
};

const prepareLyrics = async (song, artist) => {
  try {
    logger.info(`starting to generate lyrics for song: ${song} artist: ${artist}`);
    const lyrics = await scrapGoogleFn(song, artist);
    console.log('lyrics', typeof lyrics);
    const lyricsObj = await translateText3Lang(lyrics[0]);
    return lyricsObj;
  } catch (error) {
    console.log('error', error);
  }
}

const translateText3Lang = (txt) => {
  const tanslatedObj = {
    hebrew: "",
    arabic: "",
    english: ""
  };
  const txtLang = detectLanguage(txt);
  logger.info(`detected that language for the text: ${txt.length < 15 ? txt : txt.slice(15) + '...'} is: ${txtLang}`);
  tanslatedObj[txtLang] = txt;
  const langsToTranslate = ["english", "hebrew", "arabic"].filter(lang => lang !== txtLang);
  logger.info(`langs to translate the text: ${langsToTranslate}`);
  return Promise.all([
    generalTranslation(txt, txtLang, langsToTranslate[0]),
    generalTranslation(txt, txtLang, langsToTranslate[1]),
  ]).then(transltatedArr => {
    tanslatedObj[langsToTranslate[0]] = transltatedArr[0];
    tanslatedObj[langsToTranslate[1]] = transltatedArr[1];
    return tanslatedObj;
  }).catch(err => {
    console.log(`error in generating translations for ${txt.length < 15 ? txt : txt.slice(15)} + '...'`, err)

  });
};



export { getSongs, createSong, findSong, findOrCreateSong, getFullSongData };
