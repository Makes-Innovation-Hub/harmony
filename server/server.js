import dotenv from "dotenv";
import { Configuration, OpenAIApi } from "openai";

dotenv.config();
const config = new Configuration({
  // apiKey: process.env.OPEN_AI_API_KEY
  apiKey: "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"
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
const question_EN_AR = `translate from english to arabic : "Hello World 2"`;
const question_HE_EN = `translate from hebrew to english : "שלום עולם 3"`;
const question_HE_AR = `translate from hebrew to arabic : "שלום עולם 4"`;
const question_JAVASCRIPT_JAVA = `translate from javascript to java : "console.log('testing')"`;

const fetch = async(question) => {

  const result = await runPrompt(question);
  return result;

}
console.log(fetch(question_EN_HE));


