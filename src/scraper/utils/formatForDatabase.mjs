function formatMoves(data) {

  if (
    !data.name || typeof data.name !== "string" ||
    !data.type || typeof data.type !== "string" ||
    !data.classic || typeof data.classic !== "string"
  ) {
    throw new Error("Invalid or missing required fields (name, type, classic).");
  }

  return {
    name: data.name,
    type: data.type,
    driveGauge: data.driveGauge || null,
    video: data.video || null,
    definition: data.definition || null,
    classic: data.classic,
    modern: data.modern || null,
    manual: data.manual || null,
    startup: data.startup || null,
    active: data.active || null,
    missRecovery: data.missRecovery || null,
    hitStunRecovery: data.hitStunRecovery || null,
    blockStunRecovery: data.blockStunRecovery || null,
    cancelable: data.cancelable || null,
    damage: data.damage || null,
    driveIncreaseHit: data.driveIncreaseHit || null,
    driveDecreaseBlock: data.driveDecreaseBlock || null,
    driveDecreasePunish: data.driveDecreasePunish || null,
    superArtGaugeIncrease: data.superArtGaugeIncrease || null,
    properties: data.properties || null,
    scaling: data.scaling || null
  };

}

export { formatMoves };