import express from "express";
import getOpenAiInstance from "../openai.js";
import logger from "../logger.js";

const router = express.Router();

router.post("/generate-speech", async (req, res) => {
  const openAI = getOpenAiInstance();
  const lyrics = req.body.lyrics;

  try {
    const mp3 = await openAI.audio.speech.create({
      model: "tts-1",
      voice: "echo",
      input: lyrics,
    });

    // Convert mp3 to base64
    const base64Audio = Buffer.from(await mp3.arrayBuffer()).toString("base64");
    logger.info(`Text To Speech request has been called`);
    res.json({ audio: base64Audio }); // Sending audio data as JSON response
  } catch (error) {
    console.log(error);
    res.status(500).send("Error in generating speech.");
  }
});

export default router;
