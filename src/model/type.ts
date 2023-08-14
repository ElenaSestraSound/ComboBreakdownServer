interface Character {
  name: string;
  bio: string;
  like: string;
  notlike: string;
  height: string;
  weight: string;
  moves: Move[];
}

interface Move {
  character: Character;
  characterId: ObjectId;
  name: string;
  type: string;
  driveGauge?: number;
  video?: string;
  definition: string;
  classic: string;
  modern: string;
  manual?: string;
  startup: number;
  active: string;
  missRecovery: number;
  hitStunRecovery: number;
  blockStunRecovery: number;
  cancelable: string;
  damage: number;
  driveIncreaseHit: number;
  driveDecreaseBlock: number;
  driveDecreasePunish: number;
  superArtGaugeIncrease: number;
  properties: string;
  scaling?: number;
}

export { Character, Move };