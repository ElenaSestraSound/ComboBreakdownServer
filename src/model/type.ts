interface Character {
  id: string;
  name: string;
  bio: string;
  like: string;
  notlike: string;
  height: string;
  weight: string;
  vitality: number;
  moves: Move[];
}

interface Move {
  id: string;
  characterId: string;
  character?: Character;
  name: string;
  type: string;
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
}

export { Character, Move };