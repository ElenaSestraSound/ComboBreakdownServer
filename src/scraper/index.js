import puppeteer from 'puppeteer';
import { processCharacterPage } from './characterPage/processCharacterPage.js';
import { processFrameDataPage } from './frameDataPage/processFrameDataPage.js';

import { movesModern } from './skillData/movesModernManual.js';
import { driveGaugeValues } from './commandListPage/driveGaugeValues.js';
import { rawSkillData } from './skillData/rawSkillData.js';
import { transformCharacterData } from './skillData/characterSkills.js';

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

///// SCRAPE FUNCTION /////

const getScrapeData = async () => {

  const characterMap = new Map();
  const browser = await puppeteer.launch();

  for (const character in charactersUrlObject) {

    const page = await browser.newPage();
  
    /* *** process character details *** */

    await page.goto(charactersUrlObject[character]);
    const characterData = await processCharacterPage(charactersUrlObject[character]);

    characterMap.set(characterData.name, characterData);
    
    /* *** process frame data *** */

    await page.goto(charactersUrlObject[character] + '/frame');
    const frameData = await processFrameDataPage(charactersUrlObject[character] + '/frame');
  
    if(characterMap.has(character)) {
      const characterObject = characterMap.get(character);
      
      characterObject.moves = frameData.data;
      characterObject.vitality = frameData.vitality;
    }

    await page.close();

  }
  
  await browser.close();

  // merge data from local storage

  const driveGaugeProperty = driveGaugeValues;
   const characterModernMoves = movesModern;
   const characterSpecialSkills = transformCharacterData(rawSkillData);

  const characterArray = [...characterMap.values()];

  ///// MERGE /////
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
            let move = character.moves[k];  
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

  const scrapedData = mergeCharacterMoves(characterArray, characterModernMoves, driveGaugeProperty, characterSpecialSkills);

  return scrapedData;

};

export { getScrapeData };