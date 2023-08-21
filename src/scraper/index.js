import fs from 'fs';

import puppeteer from 'puppeteer';
import { getCharacterStats } from './characterPage/characterScrape.js';
import { getVitality } from './frameDataPage/vitalityValue.js'
import { extractDataFromTable } from './frameDataPage/tableScrape.js';
import { getCommandPageData } from './commandListPage/commandScrape.js'

import { movesModern } from '../scraper/characterData/movesModernManual.js';
import { rawSkillData } from '../scraper/characterData/rawSkillData.js';
import { transformCharacterData } from '../scraper/characterData/characterSkills.js';

const baseUrl = 'https://www.streetfighter.com/6/character/';
// const paths = ['/movelist', '/frame'];

const characterUrlNames = [
  'rashid', 'cammy', 'lily', 'zangief', 'jp', 'marisa', 'manon', 'deejay', 'ehonda',
  'dhalsim', 'blanka', 'ken', 'juri', 'kimberly', 'guile', 'chunli', 'jamie', 'luke', 'ryu'
];

const charactersUrlObject = characterUrlNames.reduce((obj, character) => {
  obj[character] = baseUrl + character;
  return obj;
}, {});


async function processCharacterPage(url) {
  
  console.log(`Processing ${url}`);

  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.190 Safari/537.36');
  await page.goto(url);

  const data = await page.evaluate(`(${getCharacterStats.toString()})();`);

  await browser.close();
  return data;
}

async function processFrameDataPage(url) {
  
  console.log(`Processing ${url}`);

  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });

  const page = await browser.newPage();
  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.190 Safari/537.36');
  
  await Promise.all([
    page.goto(url),
    page.waitForNavigation({ waitUntil: 'networkidle0' }),
  ]);

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

  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
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

    // process command list, get value for driveGauge

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

  // include data from local storage

   const characterModernMoves = movesModern;
   const characterSpecialSkills = transformCharacterData(rawSkillData);

//   function mergeMoves(arrays) {
//     let result = [];

//     for (const array of arrays) {
//         for (const character of array) {
//             let characterObj = result.find(item => item.name === character.name);
//             if (characterObj) {
//                 for (const move of character.moves) {
//                     let existingMove = characterObj.moves.find(m => m.name === move.name);
//                     if (existingMove) {
//                         Object.assign(existingMove, move);
//                     } else {
//                         characterObj.moves.push(move);
//                     }
//                 }
//             } else {
//                 result.push(character);
//             }
//         }
//     }
//     return result;
// }


  const characterArray = [...characterMap.values()];

  // const result = mergeMoves([characterArray, characterModernMoves, characterSpecialSkills]);
  // console.log(result);


  function mergeCharacterMoves(...dataArrays) {
    let result = [];
    for (let i = 0; i < dataArrays.length; i++) {
      let characterArray = dataArrays[i];
      for (let j = 0; j < characterArray.length; j++) {
        let character = characterArray[j];
        let existingCharacter = result.find(ch => ch.name === character.name);
        if (!existingCharacter) {
          result.push(character);
        } else {
          for (let k = 0; k < character.moves.length; k++) {
            let move = character.moves[k];  // Corrected this line
            let existingMove = existingCharacter.moves.find(m => m.name === move.name);

            if (!existingMove) {
                existingCharacter.moves.push(move);
            } else {
                Object.assign(existingMove, move);
            }
          }
        }
      }
    }
  return result;
  }

    // let mergedCharacters = [];
  
    // arrays.forEach(array => {
    //     array.forEach(character => {
    //         if (!mergedCharacters[character.name]) {
    //             mergedCharacters[character.name] = { 
    //                 name: character.name, 
    //                 moves: [] 
    //             };
    //         }
    //         character.moves.forEach(move => {
    //             const existingMove = mergedCharacters[character.name].moves.find(m => m.name === move.name);
    //             if (existingMove) {
    //                 Object.assign(existingMove, move);
    //             } else {
    //                 mergedCharacters[character.name].moves.push({...move});
    //             }
    //         });
    //     });
    // });
  
    // return mergedCharacters = [];
  
  const Character = mergeCharacterMoves(characterArray, characterModernMoves, characterSpecialSkills);
  // console.log(Character);
  return Character;


  // console.log(characterArray);
  // return characterArray;
  
};

let data = await getScrapeData();
fs.writeFile('output.json', JSON.stringify(data), (err) => {
 if (err) throw err;
});

export { getScrapeData };