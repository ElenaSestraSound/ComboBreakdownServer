const rawMoves = [{
  "name": "L Sand Blast",
  "type": "special",
  "driveGauge": 2,
  "video": "https://www.streetfighter.com/6/assets/images/character/luke/skill/movie/501.mp4",
  "definition": "Fire a shockwave of pressure from your fist. Useful for checking an opponent from a distance, and as a stopgap in combos.",
  "classic": "236+LP",
  "modern": "5+SP",
  "manual": "236+L",
  "startup": 14,
  "active": "14-18",
  "missRecovery": 47,
  "hitStunRecovery": -3,
  "blockStunRecovery": -8,
  "cancelable": "SA3",
  "damage": 600,
  "driveIncreaseHit": 1000,
  "driveDecreaseBlock": -2500,
  "driveDecreasePunish": -2000,
  "superArtGaugeIncrease": 600,
  "properties": "High-Projectile" 
}];

const character = {
  name: "Luke",
  bio: "A contractor for a PMC, Luke uses his elite military background to teach mixed martial arts. His days off are spent eating junk food, playing video games, and fighting, but make no mistake—Luke plays to win.",
  like: "Travelling, PC games, wacky T-shirts",
  notlike: "Horror games",
  height: "6'1",
  weight: "198 lbs",
  vitality: 10000
};

export { rawMoves, character };