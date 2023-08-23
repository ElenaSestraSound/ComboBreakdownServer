import fs from 'fs';


import puppeteer from 'puppeteer';
import { getCommandPageData } from './commandScrape.js'

const url = 'https://www.streetfighter.com/6/character/rashid/movelist';

async function processCommandListPage(url) {
  
  console.log(`Processing ${url}`);

  const browser = await puppeteer.launch({ headless: false, args: ['--no-sandbox'] });
  
  const page = await browser.newPage();
  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.190 Safari/537.36');

  await Promise.all([
    page.goto(url),
    page.waitForNavigation({ waitUntil: 'networkidle0' }),
  ]);

  await page.waitForSelector('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll', {visible: true});
  await page.click('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll');
  
  await page.waitForSelector('#Movelist > div.movelist_movelistarea__Y5Ucu > ul:nth-child(10) > li:nth-child(5) > div.movelist_movelist_drive__dN3Il > span > img', {visible: true});

  const data = await page.evaluate(`(${getCommandPageData.toString()})();`);
  console.log(data);

  await browser.close();
  return data;
}


const data = await processCommandListPage(url);
console.log(data);
fs.writeFile('output.json', JSON.stringify(data), (err) => {
 if (err) throw err;
});

export { processCommandListPage }