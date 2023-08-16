import puppeteer from 'puppeteer';
import { scrapeCharacterStats } from './characterPage/characterScrape.mjs';

const baseUrl = 'https://www.streetfighter.com/6/character/';
const characters = [
  'rashid', 'cammy', 'lily', 'zangief', 'jp', 'marisa', 'manon', 'deejay', 'ehonda',
  'dhalsim', 'blanka', 'ken', 'juri', 'kimberly', 'guile', 'chunli', 'jamie', 'luke', 'ryu'
];

const charactersUrlObject = characters.reduce((obj, character) => {
  obj[character] = baseUrl + character;
  return obj;
}, {});

console.log(charactersUrlObject);

const paths = ['/movelist', '/frame'];

// To get all the info fro a characters we need to do 3 calls
// basic data: https://www.streetfighter.com/6/character/luke
// combos: https://www.streetfighter.com/6/character/luke/movelist
// frame data: https://www.streetfighter.com/6/character/luke/frame

// Also keep in mind that the modern controls are behind a button click

// async function processPage(url) {
  
//   console.log(`Processing ${url}`);

//   const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
//   const page = await browser.newPage();
//   await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.190 Safari/537.36');
//   await page.goto(url);
//   const data = await page.evaluate(() => {
//     const result = scrapeCharacterStats();
//     return result;
//   }
//   console.log(data);
// }

async function processPage(url) {
  
  console.log(`Processing ${url}`);

  const browser = await puppeteer.launch({ headless: false, args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.190 Safari/537.36');
  await page.goto(url);

  const data = await page.evaluate(() => {

    return {};
  });

  console.log(data);

  await browser.close();
}


(async () => {
  const browser = await puppeteer.launch();

  for (const character in charactersUrlObject) {
    const page = await browser.newPage();
    await page.goto(charactersUrlObject[character]);
    await processPage(charactersUrlObject[character]);
    await page.close();
  }

  await browser.close();
})();
