import dotenv from "dotenv";
import express from "express";
import { fileURLToPath } from "url";
import { join, dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
import  { Configuration, OpenAIApi } from "openai";
const app = express();
dotenv.config({ path: join(__dirname, "config.env") });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

 async function start(){
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: "give me a essay about natural things ",
    temperature: 0,
    max_tokens: 1000,
  });
  console.log(response.data.choices[0].text);

 }
start()