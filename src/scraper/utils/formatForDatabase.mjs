function formatMoves (data) {
  return {
      name: data.name,
      type: data.type,
      driveGauge: data.driveGauge ? parseInt(data.driveGauge, 10) : null,
      video: data.video || null,
      definition: data.definition || null,
      classic: data.classic,
      modern: data.modern || "",
      manual: data.manual || null,
      startup: parseInt(data.startup, 10),
      active: data.active || "",
      missRecovery: parseInt(data.missRecovery, 10),
      hitStunRecovery: parseInt(data.hitStunRecovery, 10),
      blockStunRecovery: parseInt(data.blockStunRecovery, 10),
      cancelable: data.cancelable || "",
      damage: parseInt(data.damage, 10),
      driveIncreaseHit: parseInt(data.driveIncreaseHit, 10),
      driveDecreaseBlock: parseInt(data.driveDecreaseBlock, 10),
      driveDecreasePunish: parseInt(data.driveDecreasePunish, 10),
      superArtGaugeIncrease: parseInt(data.superArtGaugeIncrease, 10),
      properties: data.properties,
      scaling: data.scaling && data.scaling.length ? parseInt(data.scaling[0], 10) : null
  };
}

export { formatMoves };
