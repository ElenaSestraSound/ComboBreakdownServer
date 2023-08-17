import { PrismaClient } from '@prisma/client';
import { rawMoves, character } from './mocks.mjs'

const prisma = new PrismaClient();

function formatMove(data) {
  if (
    !data.name || typeof data.name !== "string" ||
    !data.type || typeof data.type !== "string" ||
    !data.classic || typeof data.classic !== "string"
  ) {
    throw new Error("Invalid or missing required fields (name, type, classic).");
  }
  const formattedMove = {
    name: data.name,
    type: data.type,
    note: data.note || null,
    driveGauge: parseInt(data.driveGauge, 10) || null,
    video: data.video || null,
    definition: data.definition || null,
    classic: data.classic,
    modern: data.modern || null,
    manual: data.manual || null,
    startup: parseInt(data.startup, 10) || null,
    active: data.active || null,
    missRecovery: parseInt(data.missRecovery, 10) || null,
    hitStunRecovery: parseInt(data.hitStunRecovery, 10) || null,
    blockStunRecovery: parseInt(data.blockStunRecovery, 10) || null,
    cancelable: data.cancelable || null,
    damage: parseInt(data.damage, 10) || null,
    scaling: data.scaling || null,
    driveIncreaseHit: parseInt(data.driveIncreaseHit, 10) || null,
    driveDecreaseBlock: parseInt(data.driveDecreaseBlock, 10) || null,
    driveDecreasePunish: parseInt(data.driveDecreasePunish, 10) || null,
    superArtGaugeIncrease: parseInt(data.superArtGaugeIncrease, 10) || null,
    properties: data.properties || null,
    miscellaneous: data.miscellaneous || null
  };
  return Object.fromEntries(
    Object.entries(formattedMove).filter(([_, value]) => value !== null)
  );
}

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


const mockData = mapFormattedMovesData(rawMoves);


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

run()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });