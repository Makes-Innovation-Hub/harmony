import pkg from "openai";
import dotenv from 'dotenv';
import { join } from 'path';
const { Configuration, OpenAIApi } = pkg;
dotenv.config({ path: join(__dirname, "./config/config.env") });
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