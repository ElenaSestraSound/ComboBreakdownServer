// import { prisma } from './client';

import { PrismaClient } from '@prisma/client';

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


function mapFormattedMovesData(rawMoves) {
  return rawMoves.map(data => formatMove(data));
}


const rawMoves = [
  {
      driveGauge: null,
      video: null,
      definition: null,
      manual: null,
      modern: null,
      type: "normal",
      note: null,
      classic: "MP",
      name: "Standing Medium Punch",
      startup: 6,
      active: null,
      missRecovery: 11,
      hitStunRecovery: 7,
      blockStunRecovery: -1,
      cancelable: "C",
      damage: 600,
      scaling: null,
      driveIncreaseHit: 1500,
      driveDecreaseBlock: -3000,
      driveDecreasePunish: -4000,
      superArtGaugeIncrease: 500,
      properties: "High",
      miscellaneous: null
  },
  {
      driveGauge: null,
      video: null,
      definition: null,
      manual: null,
      modern: null,
      type: "normal",
      note: null,
      classic: "HK",
      name: "Standing Heavy Kick",
      startup: 12,
      active: null,
      missRecovery: 20,
      hitStunRecovery: 9,
      blockStunRecovery: 1,
      cancelable: null,
      damage: 900,
      scaling: null,
      driveIncreaseHit: 3000,
      driveDecreaseBlock: -6000,
      driveDecreasePunish: -10000,
      superArtGaugeIncrease: 1000,
      properties: "High",
      miscellaneous: "Forces a juggle state when hitting a mid-air opponent. Produces a crumple stun for 36 frames when the attack lands as a Punish Counter. Juggle state time is extended when attack hits a mid-air opponent as a Punish Counter."
  },
  {
      driveGauge: null,
      video: null,
      definition: null,
      manual: null,
      modern: null,
      type: "normal",
      note: null,
      classic: "2+LP",
      name: "Crouching Light Punch",
      startup: 4,
      active: null,
      missRecovery: 9,
      hitStunRecovery: 4,
      blockStunRecovery: -1,
      cancelable: "C",
      damage: 300,
      scaling: "Starter scaling 10%",
      driveIncreaseHit: 250,
      driveDecreaseBlock: -500,
      driveDecreasePunish: -2000,
      superArtGaugeIncrease: 300,
      properties: "High",
      miscellaneous: "Can be rapid canceled"
  }
];

  
async function run(formattedData, characterId) {
  try {
    await prisma.$transaction(formattedData.map(move => {
      return prisma.move.create({
        data: {
          ...move,
          characterId: characterId
        }
      });
    }));
    console.log('Data seeding successful.');
  } catch (error) {
    console.log('Error seeding data:', error);
  }
};


const formattedData = mapFormattedMovesData(rawMoves);

const characterId = "64dd462a29ebda7094ca3a96";

run(formattedData, characterId)
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });


