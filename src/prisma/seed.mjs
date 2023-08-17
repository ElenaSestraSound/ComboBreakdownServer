import { PrismaClient } from '@prisma/client';
import { rawMoves, character } from './mocks.mjs'
import { formatMove } from '../scraper/helperFunctions/formatForDataBase.mjs'

const prisma = new PrismaClient();

function mapFormattedMovesData(rawData) {
  return rawData.map(data => formatMove(data));
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

// mockData
const mockData = mapFormattedMovesData(rawMoves);

/* seed the database */

async function run() {
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
          data: 
            mockData
        }
      }
    }
  });
  console.log('Seeded:', newChar);
}

// async function seedDatabase(characterArray) {
//   for (const character of characterArray) {
//     await run(character);
//   }
// }

run()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });