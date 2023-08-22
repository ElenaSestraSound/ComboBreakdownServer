import puppeteer from 'puppeteer';
import { getCharacterStats } from './characterScrape.js';


async function processCharacterPage(url) {
  
  console.log(`Processing ${url}`);

  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.190 Safari/537.36');
  await page.goto(url);

  const data = await page.evaluate(`(${getCharacterStats.toString()})();`);

  await browser.close();
  return data;
};


export { processCharacterPage };