import puppeteer from "puppeteer";

const scrapeTopHebrewSongs = async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
  });

  const page = await browser.newPage();

  await page.goto("https://glz.co.il/%D7%92%D7%9C%D7%92%D7%9C%D7%A6/%D7%9E%D7%A6%D7%A2%D7%93%D7%99%D7%9D/%D7%94%D7%9E%D7%A6%D7%A2%D7%93-%D7%94%D7%99%D7%A9%D7%A8%D7%90%D7%9C%D7%99", {
    waitUntil: "domcontentloaded",
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
  console.log(jsonData)
  return jsonData;

};

scrapeTopHebrewSongs();
