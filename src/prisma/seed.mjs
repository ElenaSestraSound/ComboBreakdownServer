// // import { prisma } from './client';

// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();


// function formatMove(data) {
//   if (
//     !data.name || typeof data.name !== "string" ||
//     !data.type || typeof data.type !== "string" ||
//     !data.classic || typeof data.classic !== "string"
//   ) {
//     throw new Error("Invalid or missing required fields (name, type, classic).");
//   }
//   const formattedMove = {
//     name: data.name,
//     type: data.type,
//     note: data.note || null,
//     driveGauge: parseInt(data.driveGauge, 10) || null,
//     video: data.video || null,
//     definition: data.definition || null,
//     classic: data.classic,
//     modern: data.modern || null,
//     manual: data.manual || null,
//     startup: parseInt(data.startup, 10) || null,
//     active: data.active || null,
//     missRecovery: parseInt(data.missRecovery, 10) || null,
//     hitStunRecovery: parseInt(data.hitStunRecovery, 10) || null,
//     blockStunRecovery: parseInt(data.blockStunRecovery, 10) || null,
//     cancelable: data.cancelable || null,
//     damage: parseInt(data.damage, 10) || null,
//     scaling: data.scaling || null,
//     driveIncreaseHit: parseInt(data.driveIncreaseHit, 10) || null,
//     driveDecreaseBlock: parseInt(data.driveDecreaseBlock, 10) || null,
//     driveDecreasePunish: parseInt(data.driveDecreasePunish, 10) || null,
//     superArtGaugeIncrease: parseInt(data.superArtGaugeIncrease, 10) || null,
//     properties: data.properties || null,
//     miscellaneous: data.miscellaneous || null
//   };
//   return Object.fromEntries(
//     Object.entries(formattedMove).filter(([_, value]) => value !== null)
//   );
// }


// function mapFormattedMovesData(rawMoves) {
//   return rawMoves.map(data => formatMove(data));
// }


// // const rawMoves = [
// //   {
// //       driveGauge: null,
// //       video: null,
// //       definition: null,
// //       manual: null,
// //       modern: null,
// //       type: "normal",
// //       note: null,
// //       classic: "MP",
// //       name: "Standing Medium Punch",
// //       startup: 6,
// //       active: null,
// //       missRecovery: 11,
// //       hitStunRecovery: 7,
// //       blockStunRecovery: -1,
// //       cancelable: "C",
// //       damage: 600,
// //       scaling: null,
// //       driveIncreaseHit: 1500,
// //       driveDecreaseBlock: -3000,
// //       driveDecreasePunish: -4000,
// //       superArtGaugeIncrease: 500,
// //       properties: "High",
// //       miscellaneous: null
// //   },
// //   {
// //       driveGauge: null,
// //       video: null,
// //       definition: null,
// //       manual: null,
// //       modern: null,
// //       type: "normal",
// //       note: null,
// //       classic: "HK",
// //       name: "Standing Heavy Kick",
// //       startup: 12,
// //       active: null,
// //       missRecovery: 20,
// //       hitStunRecovery: 9,
// //       blockStunRecovery: 1,
// //       cancelable: null,
// //       damage: 900,
// //       scaling: null,
// //       driveIncreaseHit: 3000,
// //       driveDecreaseBlock: -6000,
// //       driveDecreasePunish: -10000,
// //       superArtGaugeIncrease: 1000,
// //       properties: "High",
// //       miscellaneous: "Forces a juggle state when hitting a mid-air opponent. Produces a crumple stun for 36 frames when the attack lands as a Punish Counter. Juggle state time is extended when attack hits a mid-air opponent as a Punish Counter."
// //   },
// //   {
// //       driveGauge: null,
// //       video: null,
// //       definition: null,
// //       manual: null,
// //       modern: null,
// //       type: "normal",
// //       note: null,
// //       classic: "2+LP",
// //       name: "Crouching Light Punch",
// //       startup: 4,
// //       active: null,
// //       missRecovery: 9,
// //       hitStunRecovery: 4,
// //       blockStunRecovery: -1,
// //       cancelable: "C",
// //       damage: 300,
// //       scaling: "Starter scaling 10%",
// //       driveIncreaseHit: 250,
// //       driveDecreaseBlock: -500,
// //       driveDecreasePunish: -2000,
// //       superArtGaugeIncrease: 300,
// //       properties: "High",
// //       miscellaneous: "Can be rapid canceled"
// //   }
// // ];

  
// async function run(formattedData, characterId) {
//   try {
//     await prisma.$transaction(formattedData.map(move => {
//       return prisma.move.create({
//         data: {
//           ...move,
//           characterId: characterId
//         }
//       });
//     }));
//     console.log('Data seeding successful.');
//   } catch (error) {
//     console.log('Error seeding data:', error);
//   }
// };


// const formattedData = mapFormattedMovesData(rawMoves);

// const characterId = "64dd462a29ebda7094ca3a96";

// run(formattedData, characterId)
//   .catch((e) => {
//     console.log(e);
//     process.exit(1);
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });

import { PrismaClient } from "@prisma/client";



const rawMoves = [{"driveGauge":"","video":"","definition":"","manual":"","modern":"","type":"normal","note":"","classic":"LP","name":"Standing Light Punch","startup":"7","active":"","missRecovery":"※11","hitStunRecovery":"2","blockStunRecovery":"-3","cancelable":"","damage":"300","scaling":"Starter scaling 10%","driveIncreaseHit":"250","driveDecreaseBlock":"-500","driveDecreasePunish":"-2000","superArtGaugeIncrease":"300","properties":"High","miscellaneous":"3 frames of recovery added when the attack misses"},{"driveGauge":"","video":"","definition":"","manual":"","modern":"","type":"normal","note":"","classic":"LK","name":"Standing Light Kick","startup":"5","active":"","missRecovery":"12","hitStunRecovery":"3","blockStunRecovery":"-2","cancelable":"C","damage":"300","scaling":"Starter scaling 10%","driveIncreaseHit":"250","driveDecreaseBlock":"-500","driveDecreasePunish":"-2000","superArtGaugeIncrease":"300","properties":"High","miscellaneous":""},{"driveGauge":"","video":"","definition":"","manual":"","modern":"","type":"normal","note":"","classic":"MP","name":"Standing Medium Punch","startup":"9","active":"","missRecovery":"16","hitStunRecovery":"2","blockStunRecovery":"-3","cancelable":"SA","damage":"600","scaling":"","driveIncreaseHit":"1500","driveDecreaseBlock":"-3000","driveDecreasePunish":"-4000","superArtGaugeIncrease":"500","properties":"High","miscellaneous":""},{"driveGauge":"","video":"","definition":"","manual":"","modern":"","type":"normal","note":"","classic":"MK","name":"Standing Medium Kick","startup":"7","active":"","missRecovery":"※17","hitStunRecovery":"1","blockStunRecovery":"-3","cancelable":"","damage":"700","scaling":"","driveIncreaseHit":"2000","driveDecreaseBlock":"-4000","driveDecreasePunish":"-6000","superArtGaugeIncrease":"700","properties":"High","miscellaneous":""},{"driveGauge":"","video":"","definition":"","manual":"","modern":"","type":"normal","note":"","classic":"HP","name":"Standing Heavy Punch","startup":"10","active":"","missRecovery":"23","hitStunRecovery":"-1","blockStunRecovery":"-6","cancelable":"C","damage":"800","scaling":"","driveIncreaseHit":"2000","driveDecreaseBlock":"-5000","driveDecreasePunish":"-8000","superArtGaugeIncrease":"1000","properties":"High","miscellaneous":""},{"driveGauge":"","video":"","definition":"","manual":"","modern":"","type":"normal","note":"","classic":"HK","name":"Standing Heavy Kick","startup":"10","active":"","missRecovery":"17","hitStunRecovery":"2","blockStunRecovery":"-5","cancelable":"","damage":"900","scaling":"","driveIncreaseHit":"3000","driveDecreaseBlock":"-6000","driveDecreasePunish":"-10000","superArtGaugeIncrease":"1000","properties":"High","miscellaneous":"Forces a juggle state when hitting a mid-air opponentForces a juggle state when the attack lands as a Punish Counter.\\nFeet are Invincible from frame 8 to frame 15."},{"driveGauge":"","video":"","definition":"","manual":"","modern":"","type":"normal","note":"","classic":"2+LP","name":"Crouching Light Punch","startup":"4","active":"","missRecovery":"10","hitStunRecovery":"4","blockStunRecovery":"-2","cancelable":"C","damage":"300","scaling":"Starter scaling 10%","driveIncreaseHit":"250","driveDecreaseBlock":"-500","driveDecreasePunish":"-2000","superArtGaugeIncrease":"300","properties":"High","miscellaneous":"Can be rapid canceled"},{"driveGauge":"","video":"","definition":"","manual":"","modern":"","type":"normal","note":"","classic":"2+LK","name":"Crouching Light Kick","startup":"5","active":"","missRecovery":"12","hitStunRecovery":"-1","blockStunRecovery":"-5","cancelable":"","damage":"200","scaling":"Starter scaling 10%","driveIncreaseHit":"250","driveDecreaseBlock":"-500","driveDecreasePunish":"-2000","superArtGaugeIncrease":"300","properties":"Low","miscellaneous":"Can be rapid canceled"},{"driveGauge":"","video":"","definition":"","manual":"","modern":"","type":"normal","note":"","classic":"2+MP","name":"Crouching Medium Punch","startup":"6","active":"","missRecovery":"14","hitStunRecovery":"5","blockStunRecovery":"1","cancelable":"C","damage":"600","scaling":"","driveIncreaseHit":"1500","driveDecreaseBlock":"-3000","driveDecreasePunish":"-4000","superArtGaugeIncrease":"500","properties":"High","miscellaneous":""},{"driveGauge":"","video":"","definition":"","manual":"","modern":"","type":"normal","note":"","classic":"2+MK","name":"Crouching Medium Kick","startup":"8","active":"","missRecovery":"19","hitStunRecovery":"-2","blockStunRecovery":"-6","cancelable":"C","damage":"500","scaling":"Starter scaling 20%","driveIncreaseHit":"1000","driveDecreaseBlock":"-2000","driveDecreasePunish":"-4000","superArtGaugeIncrease":"600","properties":"Low","miscellaneous":" "},{"driveGauge":"","video":"","definition":"","manual":"","modern":"","type":"normal","note":"","classic":"2+HP","name":"Crouching Heavy Punch","startup":"7","active":"","missRecovery":"24","hitStunRecovery":"1","blockStunRecovery":"-13","cancelable":"C","damage":"800","scaling":"","driveIncreaseHit":"2000","driveDecreaseBlock":"-5000","driveDecreasePunish":"-8000","superArtGaugeIncrease":"1000","properties":"High","miscellaneous":"Forces the opponent into a standing positionThis move can be canceled until the 1st active frame."},{"driveGauge":"","video":"","definition":"","manual":"","modern":"","type":"normal","note":"","classic":"2+HK","name":"Crouching Heavy Kick","startup":"10","active":"","missRecovery":"27","hitStunRecovery":"","blockStunRecovery":"-9","cancelable":"","damage":"900","scaling":"","driveIncreaseHit":"3000","driveDecreaseBlock":"-4000","driveDecreasePunish":"-10000","superArtGaugeIncrease":"1000","properties":"Low","miscellaneous":"Knockdown time extended when attack lands as a counter or Punish Counter"},{"driveGauge":"","video":"","definition":"","manual":"","modern":"","type":"normal","note":"(During a jump)","classic":"LP","name":"Jumping Light Punch","startup":"5","active":"","missRecovery":"3 frame(s) after landing","hitStunRecovery":"","blockStunRecovery":"","cancelable":"","damage":"300","scaling":"","driveIncreaseHit":"500","driveDecreaseBlock":"-1500","driveDecreasePunish":"-2000","superArtGaugeIncrease":"300","properties":"Mid","miscellaneous":""},{"driveGauge":"","video":"","definition":"","manual":"","modern":"","type":"normal","note":"(During a jump)","classic":"LK","name":"Jumping Light Kick","startup":"6","active":"","missRecovery":"3 frame(s) after landing","hitStunRecovery":"","blockStunRecovery":"","cancelable":"","damage":"300","scaling":"","driveIncreaseHit":"500","driveDecreaseBlock":"-1500","driveDecreasePunish":"-2000","superArtGaugeIncrease":"300","properties":"Mid","miscellaneous":"Has cross-up attack properties"},{"driveGauge":"","video":"","definition":"","manual":"","modern":"","type":"normal","note":"(During a jump)","classic":"MP","name":"Jumping Medium Punch","startup":"9","active":"","missRecovery":"3 frame(s) after landing","hitStunRecovery":"","blockStunRecovery":"","cancelable":"C","damage":"700","scaling":"","driveIncreaseHit":"1000","driveDecreaseBlock":"-3000","driveDecreasePunish":"-4000","superArtGaugeIncrease":"500","properties":"Mid","miscellaneous":"Forces a juggle state when hitting a mid-air opponent"},{"driveGauge":"","video":"","definition":"","manual":"","modern":"","type":"normal","note":"(During a jump)","classic":"MK","name":"Jumping Medium Kick","startup":"7","active":"","missRecovery":"3 frame(s) after landing","hitStunRecovery":"","blockStunRecovery":"","cancelable":"","damage":"500","scaling":"","driveIncreaseHit":"1000","driveDecreaseBlock":"-2500","driveDecreasePunish":"-4000","superArtGaugeIncrease":"500","properties":"Mid","miscellaneous":"Has cross-up attack properties"},{"driveGauge":"","video":"","definition":"","manual":"","modern":"","type":"normal","note":"(During a jump)","classic":"HP","name":"Jumping Heavy Punch","startup":"9","active":"","missRecovery":"3 frame(s) after landing","hitStunRecovery":"","blockStunRecovery":"","cancelable":"","damage":"800","scaling":"","driveIncreaseHit":"2000","driveDecreaseBlock":"-4000","driveDecreasePunish":"-5000","superArtGaugeIncrease":"1000","properties":"Mid","miscellaneous":"Forces a slam knockdown on counter or Punish Counter when hitting a mid-air opponent"},{"driveGauge":"","video":"","definition":"","manual":"","modern":"","type":"normal","note":"(During a jump)","classic":"HK","name":"Jumping Heavy Kick","startup":"10","active":"","missRecovery":"3 frame(s) after landing","hitStunRecovery":"","blockStunRecovery":"","cancelable":"","damage":"800","scaling":"","driveIncreaseHit":"2000","driveDecreaseBlock":"-4000","driveDecreasePunish":"-5000","superArtGaugeIncrease":"1000","properties":"Mid","miscellaneous":""},{"driveGauge":"","video":"","definition":"","manual":"","modern":"","type":"unique","note":"","classic":"6+MP","name":"Rawhide","startup":"21","active":"","missRecovery":"21","hitStunRecovery":"2","blockStunRecovery":"-3","cancelable":"","damage":"600","scaling":"","driveIncreaseHit":"1500","driveDecreaseBlock":"-2500","driveDecreasePunish":"-5000","superArtGaugeIncrease":"500","properties":"Mid","miscellaneous":"Forces a slam knockdown when hitting a mid-air opponent"},{"driveGauge":"","video":"","definition":"","manual":"","modern":"","type":"unique","note":"","classic":"4+HP","name":"Suppressor","startup":"16","active":"","missRecovery":"20","hitStunRecovery":"3","blockStunRecovery":"-3","cancelable":"C","damage":"800","scaling":"","driveIncreaseHit":"3000","driveDecreaseBlock":"-6000","driveDecreasePunish":"-10000","superArtGaugeIncrease":"1000","properties":"High","miscellaneous":""},{"driveGauge":"","video":"","definition":"","manual":"","modern":"","type":"unique","note":"","classic":"4+HK","name":"Outlaw Kick","startup":"12","active":"","missRecovery":"24","hitStunRecovery":"4","blockStunRecovery":"-5","cancelable":"","damage":"1000","scaling":"","driveIncreaseHit":"3000","driveDecreaseBlock":"-6000","driveDecreasePunish":"-10000","superArtGaugeIncrease":"1000","properties":"High","miscellaneous":"19 frames of advantage added when the attack lands as a Punish Counter.Forces a juggle state when hitting a mid-air opponent"},{"driveGauge":"","video":"","definition":"","manual":"","modern":"","type":"unique","note":"","classic":"6+HP","name":"Double Impact(1)","startup":"16","active":"","missRecovery":"※15","hitStunRecovery":"3","blockStunRecovery":"-3","cancelable":"","damage":"800","scaling":"","driveIncreaseHit":"2000","driveDecreaseBlock":"-4000","driveDecreasePunish":"-7000","superArtGaugeIncrease":"500","properties":"High","miscellaneous":"4 frames of recovery added when the attack misses"},{"driveGauge":"","video":"","definition":"","manual":"","modern":"","type":"unique","note":"","classic":"6+HP_HP","name":"Double Impact(2)","startup":"11","active":"","missRecovery":"34","hitStunRecovery":"D","blockStunRecovery":"-19","cancelable":"C","damage":"600","scaling":"Combo scaling 20%","driveIncreaseHit":"1000","driveDecreaseBlock":"-2000","driveDecreasePunish":"-7000","superArtGaugeIncrease":"500","properties":"High","miscellaneous":""},{"driveGauge":"","video":"","definition":"","manual":"","modern":"","type":"unique","note":"","classic":"LP_MP","name":"Triple Impact(2)","startup":"8","active":"","missRecovery":"20","hitStunRecovery":"-2","blockStunRecovery":"-9","cancelable":"","damage":"400","scaling":"Immediate scaling 10%","driveIncreaseHit":"500","driveDecreaseBlock":"-1000","driveDecreasePunish":"-4000","superArtGaugeIncrease":"400","properties":"High","miscellaneous":""},{"driveGauge":"","video":"","definition":"","manual":"","modern":"","type":"unique","note":"","classic":"LP_MP_HP","name":"Triple Impact(3)","startup":"10","active":"","missRecovery":"27","hitStunRecovery":"D","blockStunRecovery":"-14","cancelable":"C","damage":"600","scaling":"","driveIncreaseHit":"500","driveDecreaseBlock":"-1500","driveDecreasePunish":"-4000","superArtGaugeIncrease":"400","properties":"High","miscellaneous":""},{"driveGauge":"","video":"","definition":"","manual":"","modern":"","type":"unique","note":"","classic":"MP_MP","name":"Snapback Combo(2)","startup":"12","active":"","missRecovery":"23","hitStunRecovery":"0","blockStunRecovery":"-8","cancelable":"SA","damage":"300","scaling":"","driveIncreaseHit":"400","driveDecreaseBlock":"-1000","driveDecreasePunish":"-4000","superArtGaugeIncrease":"300","properties":"High","miscellaneous":""},{"driveGauge":"","video":"","definition":"","manual":"","modern":"","type":"unique","note":"","classic":"2+MK_2+HP","name":"Nose Breaker","startup":"9","active":"","missRecovery":"25","hitStunRecovery":"1","blockStunRecovery":"-8","cancelable":"","damage":"600","scaling":"","driveIncreaseHit":"1000","driveDecreaseBlock":"-3000","driveDecreasePunish":"-4000","superArtGaugeIncrease":"600","properties":"High","miscellaneous":""},{"driveGauge":"","video":"","definition":"","manual":"","modern":"","type":"unique","note":"","classic":"MP_MP_MP","name":"Snapback Combo(3)","startup":"11","active":"","missRecovery":"29","hitStunRecovery":"-6","blockStunRecovery":"-14","cancelable":"","damage":"300","scaling":"","driveIncreaseHit":"400","driveDecreaseBlock":"-1000","driveDecreasePunish":"-4000","superArtGaugeIncrease":"300","properties":"High","miscellaneous":""},{"driveGauge":"","video":"","definition":"","manual":"","modern":"","type":"unique","note":"","classic":"MP_MP_MP_MP","name":"Snapback Combo(4)","startup":"11","active":"","missRecovery":"27","hitStunRecovery":"D","blockStunRecovery":"-12","cancelable":"","damage":"500","scaling":"","driveIncreaseHit":"500","driveDecreaseBlock":"-1500","driveDecreasePunish":"-4000","superArtGaugeIncrease":"500","properties":"High","miscellaneous":""},{"driveGauge":"","video":"","definition":"","manual":"","modern":"","type":"special","note":"","classic":"236+LP","name":"L Sand Blast","startup":"14","active":"","missRecovery":"47 total frames","hitStunRecovery":"-3","blockStunRecovery":"-8","cancelable":"SA3","damage":"600","scaling":"","driveIncreaseHit":"1000","driveDecreaseBlock":"-2500","driveDecreasePunish":"-2000","superArtGaugeIncrease":"600","properties":"High","miscellaneous":" "},{"driveGauge":"","video":"","definition":"","manual":"","modern":"","type":"special","note":"","classic":"236+MP","name":"M Sand Blast","startup":"17","active":"","missRecovery":"47 total frames","hitStunRecovery":"0","blockStunRecovery":"-5","cancelable":"SA3","damage":"600","scaling":"","driveIncreaseHit":"1000","driveDecreaseBlock":"-2500","driveDecreasePunish":"-2000","superArtGaugeIncrease":"600","properties":"High","miscellaneous":" "},{"driveGauge":"","video":"","definition":"","manual":"","modern":"","type":"special","note":"","classic":"236+HP","name":"H Sand Blast","startup":"20","active":"","missRecovery":"47 total frames","hitStunRecovery":"3","blockStunRecovery":"-2","cancelable":"SA3","damage":"600","scaling":"","driveIncreaseHit":"1000","driveDecreaseBlock":"-2500","driveDecreasePunish":"-2000","superArtGaugeIncrease":"600","properties":"High","miscellaneous":" "},{"driveGauge":"","video":"","definition":"","manual":"","modern":"","type":"special","note":"","classic":"236+PP","name":"OD Sand Blast","startup":"16","active":"","missRecovery":"40 total frames","hitStunRecovery":"D","blockStunRecovery":"-2","cancelable":"SA2","damage":"800","scaling":"Starter scaling 20％,Combo scaling 20％","driveIncreaseHit":"0","driveDecreaseBlock":"-2000","driveDecreasePunish":"-5000","superArtGaugeIncrease":"600","properties":"High","miscellaneous":" "},{"driveGauge":"","video":"","definition":"","manual":"","modern":"","type":"special","note":"(After an OD Sand Blast)","classic":"PP","name":"Fatal Shot","startup":"12","active":"","missRecovery":"54 total frames","hitStunRecovery":"D","blockStunRecovery":"-21","cancelable":"SA2","damage":"750","scaling":"","driveIncreaseHit":"0","driveDecreaseBlock":"-1000","driveDecreasePunish":"-2000","superArtGaugeIncrease":"400","properties":"High","miscellaneous":"Consumes 10000 of the Drive gauge on activation."},{"driveGauge":"","video":"","definition":"","manual":"","modern":"","type":"special","note":"","classic":"214+LP","name":"L Flash Knuckle","startup":"13","active":"","missRecovery":"31","hitStunRecovery":"D","blockStunRecovery":"-18","cancelable":"SA3","damage":"700","scaling":"","driveIncreaseHit":"2000","driveDecreaseBlock":"-3000","driveDecreasePunish":"-5000","superArtGaugeIncrease":"500","properties":"High","miscellaneous":"Hold the button for more than 18 frames to change propertiesPerform the Perfect version by releasing the button between frames 18 - 20"},{"driveGauge":"","video":"","definition":"","manual":"","modern":"","type":"special","note":"","classic":"214+LP","name":"L Flash Knuckle(Charged)","startup":"26","active":"","missRecovery":"25","hitStunRecovery":"D","blockStunRecovery":"-8","cancelable":"SA3","damage":"800","scaling":"","driveIncreaseHit":"2250","driveDecreaseBlock":"-4000","driveDecreasePunish":"-6000","superArtGaugeIncrease":"600","properties":"High","miscellaneous":"Has a clash hitbox from frame 28 to frame 29.Combo scaling added to 2nd hit."},{"driveGauge":"","video":"","definition":"","manual":"","modern":"","type":"special","note":"","classic":"214+LP","name":"L Flash Knuckle(Perfect)","startup":"26","active":"","missRecovery":"25","hitStunRecovery":"D","blockStunRecovery":"-8","cancelable":"SA3","damage":"900","scaling":"","driveIncreaseHit":"2250","driveDecreaseBlock":"-4000","driveDecreasePunish":"-6000","superArtGaugeIncrease":"700","properties":"High","miscellaneous":"Has a clash hitbox from frame 28 to frame 29.Combo scaling added to 2nd hit."},{"driveGauge":"","video":"","definition":"","manual":"","modern":"","type":"special","note":"","classic":"214+MP","name":"M Flash Knuckle","startup":"19","active":"","missRecovery":"27","hitStunRecovery":"3","blockStunRecovery":"-10","cancelable":"SA3","damage":"900","scaling":"","driveIncreaseHit":"2000","driveDecreaseBlock":"-5000","driveDecreasePunish":"-7000","superArtGaugeIncrease":"700","properties":"High","miscellaneous":"Hold the button for more than 18 frames to change propertiesPerform the Perfect version by releasing the button between frames 18 - 20"},{"driveGauge":"","video":"","definition":"","manual":"","modern":"","type":"special","note":"","classic":"214+MP","name":"M Flash Knuckle(Charged)","startup":"30","active":"","missRecovery":"26","hitStunRecovery":"D","blockStunRecovery":"-3","cancelable":"SA3","damage":"1000","scaling":"","driveIncreaseHit":"2000","driveDecreaseBlock":"-6000","driveDecreasePunish":"-8000","superArtGaugeIncrease":"800","properties":"High","miscellaneous":"Has a clash hitbox from frame 32 to frame 33.Combo scaling added to 2nd hit."},{"driveGauge":"","video":"","definition":"","manual":"","modern":"","type":"special","note":"","classic":"214+MP","name":"M Flash Knuckle(Perfect)","startup":"29","active":"","missRecovery":"26","hitStunRecovery":"D","blockStunRecovery":"-3","cancelable":"SA3","damage":"1100","scaling":"","driveIncreaseHit":"2000","driveDecreaseBlock":"-6000","driveDecreasePunish":"-8000","superArtGaugeIncrease":"900","properties":"High","miscellaneous":"Has a clash hitbox from frame 31 to frame 32.Combo scaling added to 2nd hit."},{"driveGauge":"","video":"","definition":"","manual":"","modern":"","type":"special","note":"","classic":"214+HP","name":"H Flash Knuckle","startup":"22","active":"","missRecovery":"21","hitStunRecovery":"D","blockStunRecovery":"-4","cancelable":"SA3","damage":"1000","scaling":"","driveIncreaseHit":"2500","driveDecreaseBlock":"-6000","driveDecreasePunish":"-8000","superArtGaugeIncrease":"800","properties":"High","miscellaneous":"Hold the button for more than 18 frames to change propertiesPerform the Perfect version by releasing the button between frames 18 - 20"},{"driveGauge":"","video":"","definition":"","manual":"","modern":"","type":"special","note":"","classic":"214+HP","name":"H Flash Knuckle(Charged)","startup":"33","active":"","missRecovery":"24","hitStunRecovery":"D","blockStunRecovery":"4","cancelable":"SA3","damage":"1300","scaling":"","driveIncreaseHit":"3000","driveDecreaseBlock":"-7000","driveDecreasePunish":"-9000","superArtGaugeIncrease":"1100","properties":"High","miscellaneous":"Has a clash hitbox from frame 35 to frame 36."},{"driveGauge":"","video":"","definition":"","manual":"","modern":"","type":"special","note":"","classic":"214+HP","name":"H Flash Knuckle(Perfect)","startup":"33","active":"","missRecovery":"24","hitStunRecovery":"D","blockStunRecovery":"4","cancelable":"SA3","damage":"1300","scaling":"","driveIncreaseHit":"3000","driveDecreaseBlock":"-7000","driveDecreasePunish":"-9000","superArtGaugeIncrease":"1200","properties":"High","miscellaneous":"Has a clash hitbox from frame 35 to frame 36."},{"driveGauge":"","video":"","definition":"","manual":"","modern":"","type":"special","note":"","classic":"214+PP","name":"OD Flash Knuckle","startup":"15","active":"","missRecovery":"39","hitStunRecovery":"-","blockStunRecovery":"-22","cancelable":"SA2","damage":"400","scaling":"","driveIncreaseHit":"0","driveDecreaseBlock":"-4000","driveDecreasePunish":"-3000","superArtGaugeIncrease":"500","properties":"High","miscellaneous":"Transitions to 2nd attack on hitCan only be canceled into DDT on the 1st hit"},{"driveGauge":"","video":"","definition":"","manual":"","modern":"","type":"special","note":"","classic":"214+PP","name":"OD Flash Knuckle(2)","startup":"33","active":"","missRecovery":"16","hitStunRecovery":"D","blockStunRecovery":"","cancelable":"SA2","damage":"400","scaling":"","driveIncreaseHit":"0","driveDecreaseBlock":"0","driveDecreasePunish":"-3000","superArtGaugeIncrease":"350","properties":"High","miscellaneous":""},{"driveGauge":"","video":"","definition":"","manual":"","modern":"","type":"special","note":"(After an OD Flash Knuckle)","classic":"PP","name":"DDT","startup":"1","active":"","missRecovery":"","hitStunRecovery":"D","blockStunRecovery":"","cancelable":"","damage":"2000","scaling":"","driveIncreaseHit":"0","driveDecreaseBlock":"0","driveDecreasePunish":"0","superArtGaugeIncrease":"1500","properties":"High","miscellaneous":"Consumes 10000 of the Drive gauge on activation."},{"driveGauge":"","video":"","definition":"","manual":"","modern":"","type":"special","note":"(During a neutral or forward jump)","classic":"214+P","name":"Aerial Flash Knuckle","startup":"14","active":"","missRecovery":"13 frame(s) after landing","hitStunRecovery":"D","blockStunRecovery":"","cancelable":"","damage":"700","scaling":"","driveIncreaseHit":"2000","driveDecreaseBlock":"-6000","driveDecreasePunish":"-8000","superArtGaugeIncrease":"800","properties":"High","miscellaneous":""},{"driveGauge":"","video":"","definition":"","manual":"","modern":"","type":"special","note":"(During a neutral or forward jump)","classic":"214+P","name":"Aerial Flash Knuckle(Charged)","startup":"23","active":"","missRecovery":"15 frame(s) after landing","hitStunRecovery":"D","blockStunRecovery":"","cancelable":"","damage":"1000","scaling":"","driveIncreaseHit":"2000","driveDecreaseBlock":"-7000","driveDecreasePunish":"-9000","superArtGaugeIncrease":"800","properties":"High","miscellaneous":""},{"driveGauge":"","video":"","definition":"","manual":"","modern":"","type":"special","note":"(During a neutral or forward jump)","classic":"214+PP","name":"OD Aerial Flash Knuckle","startup":"14","active":"","missRecovery":"15 frame(s) after landing","hitStunRecovery":"D","blockStunRecovery":"","cancelable":"","damage":"1300","scaling":"","driveIncreaseHit":"0","driveDecreaseBlock":"-7000","driveDecreasePunish":"-5000","superArtGaugeIncrease":"800","properties":"High","miscellaneous":""},{"driveGauge":"","video":"","definition":"","manual":"","modern":"","type":"special","note":"","classic":"236+K","name":"Avenger","startup":"","active":"","missRecovery":"45 total frames","hitStunRecovery":"","blockStunRecovery":"","cancelable":"","damage":"0","scaling":"","driveIncreaseHit":"0","driveDecreaseBlock":"0","driveDecreasePunish":"0","superArtGaugeIncrease":"0","properties":"","miscellaneous":"Can transition to branching attacks from frames 13 - 31"},{"driveGauge":"","video":"","definition":"","manual":"","modern":"","type":"special","note":"","classic":"236+KK","name":"OD Avenger","startup":"","active":"","missRecovery":"45 total frames","hitStunRecovery":"","blockStunRecovery":"","cancelable":"","damage":"0","scaling":"","driveIncreaseHit":"0","driveDecreaseBlock":"0","driveDecreasePunish":"0","superArtGaugeIncrease":"0","properties":"","miscellaneous":"Super Armor for 1 attack from frames 3 - 35Can transition to branching attacks from frames 12 - 31"},{"driveGauge":"","video":"","definition":"","manual":"","modern":"","type":"special","note":"(During Avenger)","classic":"P","name":"No Chaser","startup":"12","active":"","missRecovery":"19","hitStunRecovery":"D","blockStunRecovery":"-6","cancelable":"SA3","damage":"900","scaling":"","driveIncreaseHit":"2000","driveDecreaseBlock":"-5000","driveDecreasePunish":"-5000","superArtGaugeIncrease":"1000","properties":"High","miscellaneous":""},{"driveGauge":"","video":"","definition":"","manual":"","modern":"","type":"special","note":"(During OD Avenger)","classic":"P","name":"OD Chaser","startup":"12","active":"","missRecovery":"19","hitStunRecovery":"D","blockStunRecovery":"-6","cancelable":"SA2","damage":"1300","scaling":"Starter scaling 50%","driveIncreaseHit":"0","driveDecreaseBlock":"-5000","driveDecreasePunish":"-5000","superArtGaugeIncrease":"1250","properties":"High","miscellaneous":""},{"driveGauge":"","video":"","definition":"","manual":"","modern":"","type":"special","note":"(During Avenger)","classic":"K","name":"Impaler","startup":"13","active":"","missRecovery":"22","hitStunRecovery":"D","blockStunRecovery":"-8","cancelable":"","damage":"1200","scaling":"","driveIncreaseHit":"2200","driveDecreaseBlock":"-4000","driveDecreasePunish":"-5000","superArtGaugeIncrease":"1200","properties":"Mid","miscellaneous":"5 frames of recovery added when the attack misses"},{"driveGauge":"","video":"","definition":"","manual":"","modern":"","type":"special","note":"(During OD Avenger)","classic":"K","name":"OD Impaler","startup":"13","active":"","missRecovery":"19","hitStunRecovery":"D","blockStunRecovery":"-5","cancelable":"","damage":"1200","scaling":"Starter scaling 50%","driveIncreaseHit":"0","driveDecreaseBlock":"-4000","driveDecreasePunish":"-5000","superArtGaugeIncrease":"1250","properties":"Mid","miscellaneous":""},{"driveGauge":"","video":"","definition":"","manual":"","modern":"","type":"special","note":"","classic":"623+LP","name":"L Rising Uppercut","startup":"5","active":"","missRecovery":"22+12 frame(s) after landing","hitStunRecovery":"D","blockStunRecovery":"-27","cancelable":"SA3","damage":"※900","scaling":"","driveIncreaseHit":"2000","driveDecreaseBlock":"-4000","driveDecreasePunish":"-5000","superArtGaugeIncrease":"800","properties":"High","miscellaneous":"Invincible to mid-air attacks from frames 1 - 14Considered airborne from frames 8 - 36\\n*Does 800 individual damage from the 3rd active frame and on"},{"driveGauge":"","video":"","definition":"","manual":"","modern":"","type":"special","note":"","classic":"623+MP","name":"M Rising Uppercut","startup":"6","active":"","missRecovery":"24+12 frame(s) after landing","hitStunRecovery":"D","blockStunRecovery":"-29","cancelable":"SA3","damage":"※1000","scaling":"","driveIncreaseHit":"2000","driveDecreaseBlock":"-4000","driveDecreasePunish":"-5000","superArtGaugeIncrease":"800","properties":"High","miscellaneous":"Invincible to mid-air attacks from frames 1 - 8Considered airborne from frames 9 - 39\\n*Does 800 individual damage from the 3rd active frame and on"},{"driveGauge":"","video":"","definition":"","manual":"","modern":"","type":"special","note":"","classic":"623+HP","name":"H Rising Uppercut","startup":"9","active":"","missRecovery":"25+15 frame(s) after landing","hitStunRecovery":"D","blockStunRecovery":"-33","cancelable":"SA3","damage":"※1200","scaling":"","driveIncreaseHit":"2000","driveDecreaseBlock":"-4000","driveDecreasePunish":"-5000","superArtGaugeIncrease":"800","properties":"High","miscellaneous":"Invincible to mid-air attacks from frames 1 - 9Considered airborne from frames 11 - 43\\nDoes 800 individual damage from the 3rd active frame and on"},{"driveGauge":"","video":"","definition":"","manual":"","modern":"","type":"special","note":"","classic":"623+PP","name":"OD Rising Uppercut","startup":"6","active":"6-8, 9-15","missRecovery":"35+15 frame(s) after landing","hitStunRecovery":"D","blockStunRecovery":"-40","cancelable":"","damage":"1400","scaling":"","driveIncreaseHit":"0","driveDecreaseBlock":"-2000","driveDecreasePunish":"0","superArtGaugeIncrease":"1000","properties":"High","miscellaneous":"Completely invincible from frames 1 - 10Considered airborne from frames 8 - 50\\nCan only transition to Slam Dunk on hit"},{"driveGauge":"","video":"","definition":"","manual":"","modern":"","type":"special","note":"(After an OD Rising Uppercut)","classic":"PP","name":"Slam Dunk","startup":"16","active":"","missRecovery":"14+16 frame(s) after landing","hitStunRecovery":"D","blockStunRecovery":"","cancelable":"","damage":"600","scaling":"","driveIncreaseHit":"0","driveDecreaseBlock":"-4000","driveDecreasePunish":"0","superArtGaugeIncrease":"700","properties":"Mid","miscellaneous":"Consumes 10000 of the Drive gauge on activation."},{"driveGauge":"","video":"","definition":"","manual":"","modern":"","type":"super","note":"","classic":"236236+P","name":"SA1 Vulcan Blast","startup":"6","active":"","missRecovery":"108 total frames","hitStunRecovery":"D","blockStunRecovery":"-29","cancelable":"","damage":"2000","scaling":"","driveIncreaseHit":"0","driveDecreaseBlock":"-2500","driveDecreasePunish":"-5000","superArtGaugeIncrease":"0","properties":"High","miscellaneous":"Invincible to strikes and throws from frames 1 - 6Minimum guaranteed damage is 30%\\nValues do not change on counter or Punish Counter"},{"driveGauge":"","video":"","definition":"","manual":"","modern":"","type":"super","note":"","classic":"214214+P","name":"SA2 Eraser","startup":"5","active":"","missRecovery":"51","hitStunRecovery":"2","blockStunRecovery":"-26","cancelable":"","damage":"2800","scaling":"","driveIncreaseHit":"0","driveDecreaseBlock":"-5000","driveDecreasePunish":"-10000","superArtGaugeIncrease":"0","properties":"High","miscellaneous":"Completely invincible from frames 1 - 7Transitions to full attack after the 2nd hit\\nMinimum guaranteed damage is 40%\\nValues do not change on counter or Punish Counter"},{"driveGauge":"","video":"","definition":"","manual":"","modern":"","type":"super","note":"","classic":"236236+K","name":"SA3 Pale Rider","startup":"10","active":"","missRecovery":"92","hitStunRecovery":"18","blockStunRecovery":"-42","cancelable":"","damage":"4000","scaling":"*Immediate scaling 10%","driveIncreaseHit":"0","driveDecreaseBlock":"-7500","driveDecreasePunish":"-15000","superArtGaugeIncrease":"0","properties":"High","miscellaneous":"Start up and invincibility changes depending on the distance from the opponent\\nWhen activated from close range\\nStart up is 10 frames, and completely invincible from frames 1 - 13\\n\\nWhen activated from furthest possible range\\nStart up is 27 frames, and completely invincible from frames 1 - 30\\n\\nMinimum guaranteed damage is 50%\\nValues do not change on counter or Punish Counter\\n*Can only be canceled into from special moves"},{"driveGauge":"","video":"","definition":"","manual":"","modern":"","type":"super","note":"(when under 25% vitality)","classic":"236236+K","name":"CA Pale Rider","startup":"10","active":"","missRecovery":"92","hitStunRecovery":"18","blockStunRecovery":"-42","cancelable":"","damage":"4500","scaling":"*Immediate scaling 10%","driveIncreaseHit":"0","driveDecreaseBlock":"-10000","driveDecreasePunish":"-20000","superArtGaugeIncrease":"0","properties":"High","miscellaneous":"Start up and invincibility changes depending on the distance from the opponent\\nWhen activated from close range\\nStart up is 10 frames, and completely invincible from frames 1 - 13\\n\\nWhen activated from furthest possible range\\nStart up is 27 frames, and completely invincible from frames 1 - 30\\n\\nMinimum guaranteed damage is 50%\\nValues do not change on counter or Punish Counter\\n*Can only be canceled into from special moves"},{"driveGauge":"","video":"","definition":"","manual":"","modern":"","type":"throw","note":"(When near opponent)","classic":"5|6+LPLK","name":"Sweeper","startup":"5","active":"","missRecovery":"23","hitStunRecovery":"D","blockStunRecovery":"","cancelable":"","damage":"1200","scaling":"Immediate scaling 20%","driveIncreaseHit":"2000","driveDecreaseBlock":"0","driveDecreasePunish":"-10000","superArtGaugeIncrease":"2000","properties":"Throw","miscellaneous":"Properties change to the following when the attack lands as a Punish Counter:- Deals 2040 damage\\n- Super Art gauge increases by 4000\\n- Forces a hard knockdown"},{"driveGauge":"","video":"","definition":"","manual":"","modern":"","type":"throw","note":"(When near opponent)","classic":"4+LPLK","name":"Scrapper","startup":"5","active":"","missRecovery":"23","hitStunRecovery":"D","blockStunRecovery":"","cancelable":"","damage":"1200","scaling":"Immediate scaling 20%","driveIncreaseHit":"2000","driveDecreaseBlock":"0","driveDecreasePunish":"-10000","superArtGaugeIncrease":"2000","properties":"Throw","miscellaneous":"Properties change to the following when the attack lands as a Punish Counter:- Deals 2040 damage\\n- Super Art gauge increases by 4000\\n- Forces a hard knockdown"},{"driveGauge":"","video":"","definition":"","manual":"","modern":"","type":"common","note":"","classic":"66","name":"Forward Dash","startup":"","active":"","missRecovery":"19 total frames","hitStunRecovery":"","blockStunRecovery":"","cancelable":"","damage":"0","scaling":"","driveIncreaseHit":"0","driveDecreaseBlock":"0","driveDecreasePunish":"0","superArtGaugeIncrease":"0","properties":"","miscellaneous":""},{"driveGauge":"","video":"","definition":"","manual":"","modern":"","type":"common","note":"","classic":"44","name":"Backward Dash","startup":"","active":"","missRecovery":"23 total frames","hitStunRecovery":"","blockStunRecovery":"","cancelable":"","damage":"0","scaling":"","driveIncreaseHit":"0","driveDecreaseBlock":"0","driveDecreasePunish":"0","superArtGaugeIncrease":"0","properties":"","miscellaneous":"Invincible to throws from frame 1 to frame 15."},{"driveGauge":"","video":"","definition":"","manual":"","modern":"","type":"common","note":"","classic":"HPHK","name":"Drive Impact: Muzzle Flash","startup":"26","active":"","missRecovery":"35","hitStunRecovery":"D","blockStunRecovery":"-3","cancelable":"","damage":"800","scaling":"Starter scaling 20%","driveIncreaseHit":"0","driveDecreaseBlock":"-5000","driveDecreasePunish":"-15000","superArtGaugeIncrease":"0","properties":"High","miscellaneous":"Super Armor for 2 hits from frames 1 - 27Produces a wall splat if the pushback on hit causes the opponent to connect with the stage wall\\nProperties change to the following when the attack lands as a Punish Counter, or after the Super Armor absorbs a hit:\\n- Produces a crumple stun if the opponent is standing on the ground\\n- Forces a spinning knockdown when hitting a mid-air opponent\\n- Super Art gauge increases by 3000"},{"driveGauge":"","video":"","definition":"","manual":"","modern":"","type":"common","note":"(When blocking or during a successful Drive Parry)","classic":"6+HPHK","name":"Drive Reversal: Battering Ram","startup":"20","active":"","missRecovery":"26","hitStunRecovery":"D","blockStunRecovery":"-8","cancelable":"","damage":"500","scaling":"","driveIncreaseHit":"0","driveDecreaseBlock":"0","driveDecreasePunish":"0","superArtGaugeIncrease":"0","properties":"High","miscellaneous":"Recoverable damageCompletely invincible from frames 1 - 22\\n5 frames of recovery added on hit"},{"driveGauge":"","video":"","definition":"","manual":"","modern":"","type":"common","note":"","classic":"MPMK","name":"Drive Parry","startup":"1","active":"","missRecovery":"29","hitStunRecovery":"","blockStunRecovery":"","cancelable":"※","damage":"0","scaling":"","driveIncreaseHit":"0","driveDecreaseBlock":"0","driveDecreasePunish":"0","superArtGaugeIncrease":"0","properties":"","miscellaneous":"Can be canceled from the 4th frame via Drive RushParry hitbox is extended for as long as the buttons are held\\nOnly blocks can be performed during the recovery period\\nAlways in Punish Counter state during execution."},{"driveGauge":"","video":"","definition":"","manual":"","modern":"","type":"common","note":"","classic":"MPMK","name":"Perfect Parry (strike)","startup":"1","active":"","missRecovery":"1","hitStunRecovery":"","blockStunRecovery":"","cancelable":"","damage":"0","scaling":"Starter scaling 50％","driveIncreaseHit":"","driveDecreaseBlock":"","driveDecreasePunish":"","superArtGaugeIncrease":"","properties":"","miscellaneous":"Perfect Parry activates when an attack is absorbed on the frame a parry is input, or on the next frameFully invincible for 6 frames once recovery is over (invincibility not granted if you continue the parry)\\nThe player on the receiving end of a Perfect Parry cannot cancel and is forced into a Punish Counter state until their move is finished"},{"driveGauge":"","video":"","definition":"","manual":"","modern":"","type":"common","note":"","classic":"MPMK","name":"Perfect Parry (projectile)","startup":"1","active":"","missRecovery":"10","hitStunRecovery":"","blockStunRecovery":"","cancelable":"","damage":"0","scaling":"Starter scaling 50％","driveIncreaseHit":"","driveDecreaseBlock":"","driveDecreasePunish":"","superArtGaugeIncrease":"","properties":"","miscellaneous":"Perfect Parry activates when an attack is absorbed on the frame a parry is input, or on the next frameNo screen freeze occurs.\\nThe player on the receiving end of a Perfect Parry cannot cancel and is forced into a Punish Counter state until their move is finished"},{"driveGauge":"","video":"","definition":"","manual":"","modern":"","type":"common","note":"(During a Drive Parry)","classic":"66","name":"Parry Drive Rush","startup":"","active":"","missRecovery":"45 total frames","hitStunRecovery":"","blockStunRecovery":"","cancelable":"※","damage":"0","scaling":"Multiplier scaling 15％","driveIncreaseHit":"0","driveDecreaseBlock":"0","driveDecreasePunish":"0","superArtGaugeIncrease":"0","properties":"","miscellaneous":"Screen freeze occurs on the 10th frameCan be canceled into an attack on the 9th frame of the move\\nCan be canceled into actions other than a parry from the 24th frame"},{"driveGauge":"","video":"","definition":"","manual":"","modern":"","type":"common","note":"(While connecting with a special-cancelable move)","classic":"66|5|6+MPMK","name":"Cancel Drive Rush","startup":"","active":"","missRecovery":"46 total frames","hitStunRecovery":"","blockStunRecovery":"","cancelable":"※","damage":"0","scaling":"Multiplier scaling 15％","driveIncreaseHit":"0","driveDecreaseBlock":"0","driveDecreasePunish":"0","superArtGaugeIncrease":"0","properties":"","miscellaneous":"Screen freeze occurs on the 9th frameCan be canceled into an attack from the 10th frame of the move\\nCan be canceled into actions other than a parry from the 25th frame"}]
  // {
  //   "name": "Crouching Medium Kick",
  //   "type": "normal",
  //   "classic": "2+MK",
  //   "modern": "2+M",
  //   "startup": 8,
  //   "active": "8-10",
  //   "missRecovery": 19,
  //   "hitStunRecovery": -2,
  //   "blockStunRecovery": -6,
  //   "cancelable": "C",
  //   "damage": 500,
  //   "scaling": '',
  //   "driveIncreaseHit": 1000,
  //   "driveDecreaseBlock": -2000,
  //   "driveDecreasePunish": -4000,
  //   "superArtGaugeIncrease": 600,
  //   "properties": "Low"
  // }
  // {
  //     driveGauge: null,
  //     video: null,
  //     definition: null,
  //     manual: null,
  //     modern: null,
  //     type: "normal",
  //     note: null,
  //     classic: "MP",
  //     name: "Standing Medium Punch",
  //     startup: 6,
  //     active: null,
  //     missRecovery: 11,
  //     hitStunRecovery: 7,
  //     blockStunRecovery: -1,
  //     cancelable: "C",
  //     damage: 600,
  //     scaling: null,
  //     driveIncreaseHit: 1500,
  //     driveDecreaseBlock: -3000,
  //     driveDecreasePunish: -4000,
  //     superArtGaugeIncrease: 500,
  //     properties: "High",
  //     miscellaneous: null
  // },
  // {
  //     driveGauge: null,
  //     video: null,
  //     definition: null,
  //     manual: null,
  //     modern: null,
  //     type: "normal",
  //     note: null,
  //     classic: "HK",
  //     name: "Standing Heavy Kick",
  //     startup: 12,
  //     active: null,
  //     missRecovery: 20,
  //     hitStunRecovery: 9,
  //     blockStunRecovery: 1,
  //     cancelable: null,
  //     damage: 900,
  //     scaling: null,
  //     driveIncreaseHit: 3000,
  //     driveDecreaseBlock: -6000,
  //     driveDecreasePunish: -10000,
  //     superArtGaugeIncrease: 1000,
  //     properties: "High",
  //     miscellaneous: "Forces a juggle state when hitting a mid-air opponent. Produces a crumple stun for 36 frames when the attack lands as a Punish Counter. Juggle state time is extended when attack hits a mid-air opponent as a Punish Counter."
  // },
  // {
  //     driveGauge: null,
  //     video: null,
  //     definition: null,
  //     manual: null,
  //     modern: null,
  //     type: "normal",
  //     note: null,
  //     classic: "2+LP",
  //     name: "Crouching Light Punch",
  //     startup: 4,
  //     active: null,
  //     missRecovery: 9,
  //     hitStunRecovery: 4,
  //     blockStunRecovery: -1,
  //     cancelable: "C",
  //     damage: 300,
  //     scaling: "Starter scaling 10%",
  //     driveIncreaseHit: 250,
  //     driveDecreaseBlock: -500,
  //     driveDecreasePunish: -2000,
  //     superArtGaugeIncrease: 300,
  //     properties: "High",
  //     miscellaneous: "Can be rapid canceled"
  // }
// ];

// const mock = JSON.stringify(rawMoves);
// const mockData = mock;


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
const mockData = mapFormattedMovesData(rawMoves);


const character = {
  name: "Luke",
  bio: "A contractor for a PMC, Luke uses his elite military background to teach mixed martial arts. His days off are spent eating junk food, playing video games, and fighting, but make no mistake—Luke plays to win.",
  like: "Travelling, PC games, wacky T-shirts",
  notlike: "Horror games",
  height: "6'1",
  weight: "198 lbs",
  vitality: 10000
};



const prisma = new PrismaClient();

async function run() {
  console.log(mockData);
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