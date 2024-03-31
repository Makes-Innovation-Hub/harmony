import axios from "axios";
import OpenAI from "openai";
import { openAiUrl } from "../constants/urls.js";
import logger from "../logger.js";

const openAI = new OpenAI({ apiKey: process.env.OPEN_AI_API_KEY });

export async function generalTranslation(txt, originalLang, targetLang) {
  logger.info(
    `translating ${
      txt.length < 15 ? txt : txt.slice(0, 15)
    }... from ${originalLang} to ${targetLang}`
  );
  const prompt = `translate this text: ${txt} from original language: ${originalLang} to ${targetLang} language. respond only with the translated text, and nothing else`;
  try {
    const response = await openAI.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
    });
    const translatedText = response.choices[0].message.content;
    return translatedText;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}

export async function translateLyricsByOpenAi(
  lyrics,
  originalLanguage,
  targetLanguage
) {
  const prompt = `Translate the following song lyrics from ${originalLanguage} to ${targetLanguage}:\n\n ${lyrics} \n\nTranslate:`;
  const messages = [
    { role: "system", content: prompt },
    { role: "user", content: lyrics },
  ];

  try {
    const response = await axios.post(
      openAiUrl,
      {
        messages: messages,
        model: "gpt-3.5-turbo",
        max_tokens: 250,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPEN_AI_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );
    const translatedText = response.data.choices[0].message.content;
    return translatedText;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}
