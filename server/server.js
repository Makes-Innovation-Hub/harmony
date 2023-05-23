import dotenv from "dotenv";
import express from "express";
import { fileURLToPath } from "url";
import { join, dirname } from "path";
import pkg from "openai";
const { Configuration, OpenAIApi } = pkg;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
dotenv.config({ path: join(__dirname, "./config/config.env") });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
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
const question = `translate from english to hebrew : "Hello World 1"`;

runPrompt(question)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  });
