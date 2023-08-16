import puppeteer from 'puppeteer';
import { scrapeCharacterStats, getVitality } from './characterPage/characterScrape.mjs';
import { extractDataFromTable } from './frameDataPage/tableScrape.mjs'

const baseUrl = 'https://www.streetfighter.com/6/character/';
const characterUrlNames = [
  'rashid', 'cammy', 'lily', 'zangief', 'jp', 'marisa', 'manon', 'deejay', 'ehonda',
  'dhalsim', 'blanka', 'ken', 'juri', 'kimberly', 'guile', 'chunli', 'jamie', 'luke', 'ryu'
];

const charactersUrlObject = characterUrlNames.reduce((obj, character) => {
  obj[character] = baseUrl + character;
  return obj;
}, {});

// const paths = ['/movelist', '/frame'];

console.log(charactersUrlObject);

// To get all the info fro a characters we need to do 3 calls
// basic data: https://www.streetfighter.com/6/character/luke
// combos: https://www.streetfighter.com/6/character/luke/movelist
// frame data: https://www.streetfighter.com/6/character/luke/frame

// Also keep in mind that the modern controls are behind a button click

async function processCharacterPage(url) {
  
  console.log(`Processing ${url}`);

  const browser = await puppeteer.launch({ headless: false, args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.190 Safari/537.36');
  await page.goto(url);

  const data = await page.evaluate(`(${scrapeCharacterStats.toString()})();`);

  await browser.close();
  return data;
}

async function processFrameDataPage(url) {
  
  console.log(`Processing ${url}`);

  const browser = await puppeteer.launch({ headless: false, args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.190 Safari/537.36');
  await page.goto(url);

  const data = await page.evaluate(`(${extractDataFromTable.toString()})()`);
  const vitality = await page.evaluate(`(${getVitality.toString()})()`);

  await browser.close();
  return {
    data,
    vitality
  };
}

/* scrape function */

(async () => {

  const characterMap = new Map();
  const browser = await puppeteer.launch();

  for (const character in charactersUrlObject) {
    const page = await browser.newPage();
    await page.goto(charactersUrlObject[character]);
    const data = await processCharacterPage(charactersUrlObject[character]);
    characterMap.set(data.name, data);
    await page.close();
    break;
  }
  
  for (const character in charactersUrlObject) {
    const page = await browser.newPage();
    await page.goto(charactersUrlObject[character] + '/frame');
    const result = await processFrameDataPage(charactersUrlObject[character] + '/frame'); 
    if(characterMap.has(character)) {
      const characterObject = characterMap.get(character);
      characterObject.moves = result.data;
      characterObject.vitality = result.vitality;
    }
    await page.close();
    break;
  }

  await browser.close();

  const characters = Object.fromEntries(characterMap);
  const charactersArray = [...characterMap.values()];
  console.log(charactersArray);

})();
