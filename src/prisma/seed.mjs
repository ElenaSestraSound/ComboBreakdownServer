import { PrismaClient } from '@prisma/client';
import { rawMoves, character } from './_mocks.mjs';
import { formatMove } from '../SCRAPER/helperFunctions/formatForDataBase.mjs';
import { getScrapeData } from '../SCRAPER/index.mjs';

const prisma = new PrismaClient();

function mapFormattedMovesData(rawData) {
  const data = rawData.map(element => formatMove(element));
  // console.log(data);
  return data;
}

async function checkIfCharacterExists(characterName) {
  const existingCharacter = await prisma.character.findFirst({
    where: {
      name: characterName,
    },
  });
  if (existingCharacter) {
    return true;
  }
  return false;
}


function stringifyMovesProperty(characterArray) {
  const data = characterArray.map(character => {
    const transformedMoves = mapFormattedMovesData(character.moves);
    return {
      ...character,
      moves: transformedMoves
    };
  });
  // console.log(data)
  return data;
}



// function stringifyMovesProperty (characterArray) {
//   // console.log(characterArray);
//   const data = characterArray.map(character => {
//     mapFormattedMovesData(character.moves)
//   });
//   // console.log(data);
//   return data;
// }

const scrapeData = await getScrapeData();
const seedData = stringifyMovesProperty(scrapeData);

/* seed the database */

async function run(character) {
  console.log(character);
  if (await checkIfCharacterExists(character.name)) {
    console.log(`Character with name ${character.name} already exists!`);
    return;
  }
  const newChar = await prisma.character.create({
    data: {
      name: character.name,
      bio: character.bio,
      like: character.like,
      notlike: character.notlike,
      height: character.height,
      weight: character.weight,
      vitality: character.vitality,
      moves: {
        createMany: {
          data: character.moves
        }
      }
    }
  });
  console.log('Seeded:', newChar);
}

// async function seedDatabase(characterArray) {
//   for (const character of characterArray) {
//     run(character)
//     .catch((e) => {
//       console.log(e);
//       process.exit(1);
//     })
//     .finally(async () => {
//       await prisma.$disconnect();
//     });;
//   }
// }

async function seedDatabase(characterArray) {
  for (const character of characterArray) {
    try {
      await run(character);
    } catch (e) {
      console.log(e);
      process.exit(1);
    }
  }
  await prisma.$disconnect();
}


seedDatabase(seedData);