import dotenv from "dotenv";
import express from "express";
import { fileURLToPath } from "url";
import { join, dirname } from "path";
import { Configuration, OpenAIApi } from "openai";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

dotenv.config({ path: join(__dirname, "config.env") });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
const config = new Configuration({
  apiKey: process.env.OPEN_AI_API_KEY
});
const openai = new OpenAIApi(config);
const runPrompt = async (question) => {
  const prompt = question;
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: prompt,
    max_tokens: 2048,
    temperature: 1
  });
  const parsableJSONresponse = response.data.choices[0].text;
  if (
    question.includes("from english to hebrew") ||
    question.includes("from english to arabic")
  ) {
    return parsableJSONresponse.split("").reverse().join("");
  } else {
    return parsableJSONresponse;
  }
};



const question_EN_HE = `translate from english to hebrew : "Hello World 1"`;

const result = await runPrompt(question_EN_HE);
console.log(result);