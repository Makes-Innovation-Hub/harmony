import express from "express";

const router = express.Router();

router.post("/generate-speech", async (req, res) => {
  const openai = getOpenAiInstance();
  const lyrics = req.body.lyrics;
  const voice = req.body.voice || "onyx";
  const __dirname = path.dirname(fileURLToPath(import.meta.url));

  const speechFile = path.resolve(__dirname, "./speech.mp3");

  try {
    const mp3 = await openai.audio.speech.create({
      model: "tts-1",
      voice: voice,
      input: lyrics,
    });

    const buffer = Buffer.from(await mp3.arrayBuffer());
    await fs.writeFile(speechFile, buffer);

    res.download(speechFile);
  } catch (error) {
    res.status(500).send("Error in generating speech.");
  }
});

export default router;
