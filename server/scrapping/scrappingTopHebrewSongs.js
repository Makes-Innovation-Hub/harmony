import axios from "axios";
import * as cheerio from "cheerio";

const url =
  "https://glz.co.il/%D7%92%D7%9C%D7%92%D7%9C%D7%A6/%D7%9E%D7%A6%D7%A2%D7%93%D7%99%D7%9D/%D7%94%D7%9E%D7%A6%D7%A2%D7%93-%D7%94%D7%99%D7%A9%D7%A8%D7%90%D7%9C%D7%99";

async function scrapeTopHebrewSongs() {
  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    console.log(data);

    const infoElement = $("a.info");
    const nameElement = $("div.name");

    const infoHref = infoElement.attr("href");
    const nameText = nameElement.text().trim();

    console.log("Info:", infoHref);
    console.log("Name:", nameText);
  } catch (error) {
    console.error(error);
  }
}

scrapeTopHebrewSongs();
