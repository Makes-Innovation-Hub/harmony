import detectLanguage from "./detectLang.js";
import logger from "../logger.js";
import { generalTranslation } from "./openAiTranslation.js";
const translateText3Lang = async (txt) => {
  const tanslatedObj = {
    hebrew: "",
    arabic: "",
    english: "",
  };
  const txtLang = detectLanguage(txt);
  logger.info(
    `detected that language for the text: ${
      txt.length < 15 ? txt : txt.slice(15) + "..."
    } is: ${txtLang}`
  );
  tanslatedObj[txtLang] = txt;
  const langsToTranslate = ["english", "hebrew", "arabic"].filter(
    (lang) => lang !== txtLang
  );
  logger.info(`langs to translate the text: ${langsToTranslate}`);
  return Promise.all([
    generalTranslation(txt, txtLang, langsToTranslate[0]),
    generalTranslation(txt, txtLang, langsToTranslate[1]),
  ])
    .then((transltatedArr) => {
      tanslatedObj[langsToTranslate[0]] = transltatedArr[0];
      tanslatedObj[langsToTranslate[1]] = transltatedArr[1];
      return tanslatedObj;
    })
    .catch((err) => {
      console.log(
        `error in generating translations for ${
          txt.length < 15 ? txt : txt.slice(15)
        } + '...'`,
        err
      );
    });
};

export default translateText3Lang;
