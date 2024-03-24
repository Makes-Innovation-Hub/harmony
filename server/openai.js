import OpenAI from "openai";

let openaiInstance = null;

const getOpenAiInstance = () => {
  if (!openaiInstance) {
    const configuration = {
      apiKey: process.env.OPEN_AI_API_KEY,
    };
    openaiInstance = new OpenAI(configuration);
  }
  return openaiInstance;
};
export default getOpenAiInstance;
