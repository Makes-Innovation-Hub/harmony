import puppeteer from "puppeteer";
import { hebrewTopSongsUrl } from '../constants/urls.js'

const scrapeTopHebrewSongs = async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
  });

  const page = await browser.newPage();

  await page.goto(hebrewTopSongsUrl, {
    waitUntil: "networkidle2",
  });


  await page.waitForSelector('chart-page');

  const data = await page.evaluate(() => {
    const chartPage = document.querySelector('chart-page');

    const infoElements = Array.from(chartPage.querySelectorAll('.info'));
    const nameElements = Array.from(chartPage.querySelectorAll('.name'));

    const infoTexts = infoElements.map(element => element.innerText);
    const nameTexts = nameElements.map(element => element.innerText);

    return { info: infoTexts, name: nameTexts };
  });


  const formattedData = data.name.map((artist, index) => ({ [artist]: data.info[index] }));

  const jsonData = JSON.stringify(formattedData, null, 2);
  
  await browser.close();
  return jsonData;

};

