interface Character {
  name: string;
  bio: string;
  like: string;
  notlike: string;
  height: string;
  weight: string;
  vitality: number;
}

interface Move {
  name: string;
  type: string;
  note?: string;
  driveGauge?: number;
  video?: string;
  definition?: string;
  classic: string;
  modern?: string;
  manual?: string;
  startup?: number;
  active?: string;
  missRecovery?: number;
  hitStunRecovery?: number;
  blockStunRecovery?: number;
  cancelable?: string;
  damage?: number;
  driveIncreaseHit?: number;
  driveDecreaseBlock?: number;
  driveDecreasePunish?: number;
  superArtGaugeIncrease?: number;
  properties?: string;
  scaling?: string;
  miscellaneous?: string;
}

export { Character, Move };