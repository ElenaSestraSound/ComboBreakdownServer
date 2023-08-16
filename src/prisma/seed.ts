// import { prisma } from './client';

// async function run(element) {
//   const newChar = await prisma.character.create({
//     data: {
//       "name": element.name,
//       "bio": element.bio,
//       "like": element.loke,
//       "notlike": ...,
//       "height": "6'1",
//       "weight": "198 lbs",
//       "vitality": 10000,
//       "moves": {
//         createMany: {
//           data: [
//             {
//               "name": "L Sand Blast",
//               "type": "special",
//               "driveGauge": 2,
//               "video": "https://www.streetfighter.com/6/assets/images/character/luke/skill/movie/501.mp4",
//               "definition": "Fire a shockwave of pressure from your fist. Useful for checking an opponent from a distance, and as a stopgap in combos.",
//               "classic": "236+LP",
//               "modern": "5+SP",
//               "manual": "236+L",
//               "startup": 12,
//               "active": "14-18",
//               "missRecovery": 47,
//               "hitStunRecovery": -3,
//               "blockStunRecovery": -8,
//               "cancelable": "SA3",
//               "damage": 600,
//               "driveIncreaseHit": 1000,
//               "driveDecreaseBlock": -2500,
//               "driveDecreasePunish": -2000,
//               "superArtGaugeIncrease": 600,
//               "properties": "High-Projectile"
                    
//             },
//             {
//               "name": "Crouching Medium Kick",
//               "type": "normal",
//               "classic": "2+MK",
//               "modern": "2+M",
//               "startup": 8,
//               "active": "8-10",
//               "missRecovery": 19,
//               "hitStunRecovery": -2,
//               "blockStunRecovery": -6,
//               "cancelable": "C",
//               "damage": 500,
//               "scaling": "fun",
//               "driveIncreaseHit": 1000,
//               "driveDecreaseBlock": -2000,
//               "driveDecreasePunish": -4000,
//               "superArtGaugeIncrease": 600,
//               "properties": "Low"
//             }
//           ]
//         }
//       }
//     }
//   });
//   console.log('Seeded:', newChar);
// }
// run()
//   .catch((e) => {
//     console.log(e);
//     process.exit(1);
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });

//   /////////////////////////////////////////


import { prisma } from './client';
import { getScrapeData } from '../scraper/index';

const scrapeData = getScrapeData();

async function run(scrapeData: any) {
  for (const characterObject of scrapeData) {
    const { moves, ...characterData } = characterObject;

    const newChar = await prisma.character.create({
      data: {
        ...characterData,
        moves: {
          createMany: {
            data: moves,
          },
        },
      },
    });

    console.log('Created character:', newChar);
  }
  console.log('Database seeding complete.');
}

run(scrapeData)
  .catch(error => {
    console.error('Error seeding the database:', error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
