const port = process.env.PORT ?? 5000;
const baseServerUrl = process.env.BASE_SERVER_URL ?? "http://localhost";

export const serverApiUrl = `${baseServerUrl}:${port}/api/v1`;

export const hebrewTopSongsUrl =
  "https://glz.co.il/%D7%92%D7%9C%D7%92%D7%9C%D7%A6/%D7%9E%D7%A6%D7%A2%D7%93%D7%99%D7%9D/%D7%94%D7%9E%D7%A6%D7%A2%D7%93-%D7%94%D7%99%D7%A9%D7%A8%D7%90%D7%9C%D7%99";
export const arabTopSongsUrl = "https://www.arabsounds.net/top20/";

export const SCRAPE_ARABIC_LYRICS_URL = "https://lyricstranslate.com/en/";
export const openAiUrl = "https://api.openai.com/v1/chat/completions";
