import puppeteer from 'puppeteer';
import { getCharacterStats, getVitality } from './characterPage/characterScrape.mjs';
import { extractDataFromTable } from './frameDataPage/tableScrape.mjs';
import { getCommandPageData } from './commandListPage/commandScrape.mjs'

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

async function processCharacterPage(url) {
  
  console.log(`Processing ${url}`);

  const browser = await puppeteer.launch({ headless: false, args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.190 Safari/537.36');
  await page.goto(url);

  const data = await page.evaluate(`(${getCharacterStats.toString()})();`);

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

async function processCommandListPage(url) {
  
  console.log(`Processing ${url}`);

  const browser = await puppeteer.launch({ headless: false, args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.190 Safari/537.36');
  await page.goto(url);

  const data = await page.evaluate(`(${getCommandPageData.toString()})();`);

  await browser.close();
  return data;
}

/* scrape function */

const getScrapeData = async () => {

  const characterMap = new Map();
  const browser = await puppeteer.launch();

  for (const character in charactersUrlObject) {

    const page = await browser.newPage();
  
    // process character details

    await page.goto(charactersUrlObject[character]);
    const characterData = await processCharacterPage(charactersUrlObject[character]);

    characterMap.set(characterData.name, characterData);
    
    // process frame data

    await page.goto(charactersUrlObject[character] + '/frame');
    const frameData = await processFrameDataPage(charactersUrlObject[character] + '/frame');
  
    if(characterMap.has(character)) {
      const characterObject = characterMap.get(character);
      characterObject.moves = frameData.data;
      characterObject.vitality = frameData.vitality;
    }

    // // process command list page, get value for driveGauge

    await page.goto(charactersUrlObject[character] + '/movelist');
    const commandPageData = await processCommandListPage(charactersUrlObject[character] + '/movelist');
    
    if (characterMap.has(character)) {
      const characterObject = characterMap.get(character);
      
      commandPageData.forEach(commandMove => {
          const foundMove = characterObject.moves.find(move => move.name === commandMove.name);
          if (foundMove) {
              foundMove.driveGauge = commandMove.driveGauge;
          }
      });
    }
    
    await page.close();

    break;
  }

  await browser.close();

  const characterArray = [...characterMap.values()];

  return characterArray;
};

getScrapeData();

export { getScrapeData };