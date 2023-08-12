// We are going to leave the assisted combos out of the scraping
// On this web page the controls are explained: https://www.streetfighter.com/6/mode/fightingground
type Character = {
  name: string,
  bio: string;
  like: string,
  notlike: string,
  height: string,
  weight: string,
  moves: Move[];
};
type Move = {
  name: string,
  type: string; // special/superArt/unique/common/throw/normal
  combination: {
    classic: string,
    modern?: string,
    manual?: string, // only for special and super arts
    note?: string; // in some of the movements are notes like (During a Drive Parry)
  };
  driveGauge?: number,
  video?: string,
  definition?: string;
  frameData: FrameData;
};

type FrameData = {
  startup: number,
  active: string,
  missRecovery: number,
  hitStunRecovery: number,
  blockStunRecovery: number,
  cancelable?: string; // C/SA/SA2/SA3/*
  damage: number,
  scaling?: number,
  driveIncreaseHit: number,
  driveDecreaseBlock: number,
  driveDecreasePunish: number,
  superArtGaugeIncrease: number,
  properties: string; // H/M/L/T/P,
  miscellaneus?: string;
};

/*
Classic
up: 8
left: 4
right: 6
down: 2
no input: 5

up right: 9
up left: 7
down right: 3
down left: 1

light: L
medium: M,
heavy: H

punch: P
kick: K

keep the button pressed: PRESS

2+HK -> down heavy kick
236+MP -> forward quarter moon + medium punch
MK MK -> medium kick and then another one (space is the triangle that points to the right in capcom's notation)
*/

/*
Modern
up: 8
left: 4
right: 6
down: 2
no input: 5 (N)

special: SP
drive impact: DI
drive parry: DP

light: L
medium: M
heavy: H

keep the button pressed: PRESS
*/