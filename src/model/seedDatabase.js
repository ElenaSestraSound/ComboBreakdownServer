import { prisma } from '../prisma/client.js';
import { formatMove } from '../scraper/helperFunctions/formatForDataBase.js';
import { getScrapeData } from '../scraper/index.js';

function mapFormattedMovesData(rawData) {
  const data = rawData.map(element => formatMove(element));
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
  return data;
}


async function processCharacter(character) {
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

/* seed the database */

async function seedDatabase(data) {
  const seedData = stringifyMovesProperty(data);
  try {
    for (const character of seedData) {
      await processCharacter(character);
    }
  } catch (e) {
    console.log(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

async function runScrapeAndSeed () {
  seedDatabase(await getScrapeData());
}

export { runScrapeAndSeed };