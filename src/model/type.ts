export type CharacterDetails = {
  name: string;
  bio: string;
  like: string;
  notlike: string;
  height: string;
  weight: string;
  vitality: number;
};

export type Move = {
  name: string;
  type: string;
  image?: string;
  classic: string;
  modern?: string;
  manual?: string;
  note?: string;
  driveGauge?: number;
  video?: string;
  definition?: string;
  startup?: number;
  active?: string;
  missRecovery?: number;
  hitStunRecovery?: number;
  blockStunRecovery?: number;
  cancelable?: string;
  damage?: number;
  scaling?: string;
  driveIncreaseHit?: number;
  driveDecreaseBlock?: number;
  driveDecreasePunish?: number;
  superArtGaugeIncrease?: number;
  properties?: string;
  miscellaneous?: string;
};

export type Character = CharacterDetails;