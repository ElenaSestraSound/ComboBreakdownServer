import { PrismaClient } from '@prisma/client';
import { formatMove } from '../scraper/helperFunctions/formatForDataBase.mjs';
import { getScrapeData } from '../scraper/index.mjs';

const prisma = new PrismaClient();

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

const scrapeData = await getScrapeData();
const seedData = stringifyMovesProperty(scrapeData);

/* create characters */

// import readline from 'readline';

// function askQuestion(query) {
//   const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
//   });

//   return new Promise(resolve => 
//     rl.question(query, ans => {
//       rl.close();
//       resolve(ans);
//     })
//   );
// }

// async function run(character) {
//   console.log(character);
//   if (await checkIfCharacterExists(character.name)) {
//     console.log(`Character with name ${character.name} already exists!`);
    
//     const answer = await askQuestion('Do you want to overwrite this character? (yes/no) ');
//     if (answer.toLowerCase() !== 'yes') {
//       console.log('Character not overwritten.');
//       return;
//     }

//     await prisma.character.delete({
//       where: { name: character.name }
//     });
//     console.log(`Character with name ${character.name} deleted.`);
//   }

//   const newChar = await prisma.character.create({
//     data: {
//       name: character.name,
//       bio: character.bio,
//       like: character.like,
//       notlike: character.notlike,
//       height: character.height,
//       weight: character.weight,
//       vitality: character.vitality,
//       moves: {
//         createMany: {
//           data: character.moves
//         }
//       }
//     }
//   });
//   console.log('Seeded:', newChar);
// }

///////////////////////

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

/* seed the database */

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

export { seedDatabase };