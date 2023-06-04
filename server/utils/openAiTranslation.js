import axios from "axios";

import { openAiUrl } from "../constants/urls.js";

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
        max_tokens: 100,
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
