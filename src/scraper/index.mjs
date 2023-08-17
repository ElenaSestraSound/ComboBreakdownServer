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

const getScrapeData = async () => {

  const characterMap = new Map();
  const browser = await puppeteer.launch();

  // for (const character in charactersUrlObject) {
  //   const page = await browser.newPage();
  //   await page.goto(charactersUrlObject[character]);
  //   const data = await processCharacterPage(charactersUrlObject[character]);
  //   characterMap.set(data.name, data);
  //   break;
  //   await page.close();
  // }
  
  // for (const character in charactersUrlObject) {
  //   const page = await browser.newPage();
  //   await page.goto(charactersUrlObject[character] + '/frame');
  //   const result = await processFrameDataPage(charactersUrlObject[character] + '/frame'); 
  //   if(characterMap.has(character)) {
  //     const characterObject = characterMap.get(character);
  //     characterObject.moves = result.data;
  //     characterObject.vitality = result.vitality;
  //   }
  //   break;
  //   await page.close();
  // }



  for (const character in charactersUrlObject) {
    
    const page = await browser.newPage();
    await page.goto(charactersUrlObject[character]);
    const data = await processCharacterPage(charactersUrlObject[character]);
    characterMap.set(data.name, data);
    
    await page.close();
    
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

  }




  await browser.close();

  const characterArray = [...characterMap.values()];

  // console.log(characterArray);
  return characterArray;
};

getScrapeData();

export { getScrapeData };