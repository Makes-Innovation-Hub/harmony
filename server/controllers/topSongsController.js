import asyncHandler from "../middleware/asyncHandler.js";
import TopSongs from "../models/TopSongs.js";
import logger from "../logger.js";
import ErrorResponse from "../utils/ErrorResponse.js";
import scrapeTopArabicSongs from "../scrapping/scrappingTopArabicSongs.js";
import scrapeTopHebrewSongs from "../scrapping/scrappingTopHebrewSongs.js";
import { findOrCreateSong } from "./songsController.js";
import { dummySongsArray } from "../utils/createDummyData.js";
import createObjectFromQuery from "../utils/createObjectFromQuery.js";
import checkIfAWeekPassed from "../utils/checkIfAWeekPassed.js";

import axios from "axios";

const clearTop10Songs = async () => {
    TopSongs.deleteMany({})
        .then(() => {
            logger.info("TOP10 songs successfully cleared from DataBase");
        })
        .catch((error) => {
            logger.error("ERROR: TOP10 songs clearing from DataBase ");
            console.error(error);
        });
};

const getOrCreateEachSong = async (language) => {
    let scrapedTopSongs;
    if (language === "hebrew") {
        // scrapedTopSongs = JSON.parse(await scrapeTopHebrewSongs());
    }
    if (language === "arabic") {
        // scrapedTopSongs = JSON.parse(await scrapeTopArabicSongs());
    }
    //scrapedTopArabicSongs should be translated and massaged, to get an array of top songs. Each song should be an object with the exact structure and information in the model (Song.js)
    const massagedResults = dummySongsArray;

    const createdSongsIdArray = [];

    for (const result of massagedResults) {
        const song = await findOrCreateSong({ body: result });
        const songId = song._id;
        createdSongsIdArray.push(songId);
    }
    logger.info("Songs ID Array Created");
    return createdSongsIdArray;
};

const getOrCreateTopSongsBothLangs = async () => {
    const hebrewTop = await getOrCreateEachSong("hebrew");
    const arabicTop = await getOrCreateEachSong("arabic");
    logger.info("Hebrew Top Song & Arabic Top Song created successfully");
    return { hebrewTop, arabicTop };
};

const createTopSongsInDB = async (language, topSongsIdArray) => {
    logger.info(
        `createTopSongsInDB with language ${language} and ID: ${topSongsIdArray}`
    );
    const topSongs = (
        await TopSongs.create({ language, songs: topSongsIdArray })
    ).populate("songs");
    logger.info("Top Song Created successfully In MongoDB");
    return topSongs;
};

const findTopSongs = async () => {
    const topSongsArray = await TopSongs.find().populate("songs");
    logger.info(`findTopSongs found with song details: ${topSongsArray}`);
    if (topSongsArray.length > 0) return topSongsArray;
};

// @desc    get all top songs
//@route    GET /api/v1/harmony/topSongs
// @access  Public
const getTopSongs = asyncHandler(async (req, res, next) => {
    const topSongs = await findTopSongs();
    if (!topSongs) {
        return next(new ErrorResponse(`Top songs not found`), 404);
    }
    logger.info(
        `getTopSongs done successfully for: ${JSON.stringify(topSongs)}`
    );

    res.status(200).json({
        success: true,
        data: topSongs,
    });
});

// @desc    Create top songs
//@route    POST /api/v1/harmony/topSongs
// @access  Public
const createTopSongs = asyncHandler(async (req, res, next) => {
    const { date } = req.body;
    logger.info(`createSong with song details: ${JSON.stringify(date)}`);

    let topSongs;
    let isMoreThanAWeek;

    if (date !== undefined) {
        isMoreThanAWeek = checkIfAWeekPassed(date);
        if (!isMoreThanAWeek) {
            const topSongsArray = await findTopSongs();
            if (!topSongsArray) {
                return next(new ErrorResponse(`Top songs not found`), 404);
            }
            topSongs = topSongsArray[topSongsArray.length - 1];
        }
    }
    if (date === undefined || (date !== undefined && isMoreThanAWeek)) {
        const results = await getOrCreateTopSongsBothLangs();
        logger.info(`getOrCreateTopSongsBothLangs with data: ${results} sent`);
        if (!results) {
            return next(
                new ErrorResponse(
                    `Error while getting or creating top songs from scraped data`
                )
            );
        }
        await clearTop10Songs();
        const arabicTopSongs = await createTopSongsInDB(
            "arabic",
            results.arabicTop
        );
        if (!arabicTopSongs) {
            return next(
                new ErrorResponse(`Error while creating Arabic topSongs`)
            );
        }
        const hebrewTopSongs = await createTopSongsInDB(
            "hebrew",
            results.hebrewTop
        );
        if (!hebrewTopSongs) {
            return next(
                new ErrorResponse(`Error while creating Hebrew topSongs`)
            );
        }
        topSongs = { arabicTopSongs, hebrewTopSongs };
    }

    res.status(200).json({
        success: true,
        data: topSongs,
    });
    logger.info("Top Song Created successfully");
});

const scrapeTop10Songs = async () => {
    try {
        let topSongs;

        // check if there topSongs collection in DB
        topSongs = await findTopSongs();

        // run createTopSongs function if there no data in DB or more than week passed
        if (!topSongs || (topSongs && checkIfAWeekPassed(topSongs[0].date))) {
            console.log("top songs :", topSongs);
            topSongs = axios
                .post("http://localhost:5000/api/v1/harmony/topSongs")
                .then((res) => {
                    logger.info(
                        "Scrapping TOP10 songs completed successfully."
                    );
                    return;
                })
                .catch((error) => {
                    logger.error("Scrapping TOP10 songs FAILED.");
                    console.log(error);
                });
        }
    } catch (error) {
        logger.error("Scrapping TOP10 songs FAILED.");
        console.log(error);
    }
};

export { getTopSongs, createTopSongs, scrapeTop10Songs };
