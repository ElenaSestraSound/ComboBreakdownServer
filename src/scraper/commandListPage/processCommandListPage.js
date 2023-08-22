import fs from 'fs';

import puppeteer from 'puppeteer';
import { getCommandPageData } from './commandScrape.js'

const url = 'https://www.streetfighter.com/6/character/rashid/movelist';

async function processCommandListPage(url) {
  
  console.log(`Processing ${url}`);

  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
  
  const page = await browser.newPage();
  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.190 Safari/537.36');

  await Promise.all([
    page.goto(url),
    page.waitForNavigation({ waitUntil: 'networkidle0' }),
  ]);

  const data = await page.evaluate(`(${getCommandPageData.toString()})();`);
  console.log(data);

  await browser.close();
  return data;
}


// const data = await processCommandListPage(url);
// console.log(data);
// fs.writeFile('output.json', JSON.stringify(data), (err) => {
//  if (err) throw err;
// });

export { processCommandListPage }