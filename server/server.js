import cors from 'cors'
import dotenv from "dotenv";
import express from "express";
import { fileURLToPath } from "url";
import { join, dirname } from "path";
import {connectDB, closeDBConnection} from "./config/db.js";
import scrappingRoutes from './routes/scrappingRoutes.js'
import pkg from "openai";
const { Configuration, OpenAIApi } = pkg;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use(cors())
dotenv.config({ path: join(__dirname, "./config/config.env") });
app.use("/api/v1/", scrappingRoutes)


const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV

let server;

connectDB()

app.listen(
  PORT,
  console.log(`Server running in ${NODE_ENV}
  mode on port ${PORT}`)
);


process.on("unhandledRejection", (err, promise) => {
  console.error(`Error: ${err.message}`);
  server.close(() => process.exit(1));
  closeDBConnection()
});

const init = () => {
  const config = new Configuration({
    apiKey: process.env.OPEN_AI_API_KEY,
  });
  return new OpenAIApi(config);
};

const openai = init();
const openAiInit = async (openai, prompt) => {
  try {
    return await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
    });
  } catch (error) {
    throw new Error("OpenAI API request failed: " + error.message);
  }
};
const runPrompt = async (question) => {
  const prompt = question;
  try {
    const response = await openAiInit(openai, prompt);
    const parsableJSONresponse = response.data.choices[0].message.content;

    if (
      question.includes("from english to hebrew") ||
      question.includes("from english to arabic")
    ) {
      return parsableJSONresponse.split("").reverse().join("");
    } else {
      return parsableJSONresponse;
    }
  } catch (error) {
    throw new Error("Failed to process prompt: " + error.message);
  }
};

// Example usage
const question = `translate from hebrew to arabic: "שלום עולם"`;


runPrompt(question)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  });

