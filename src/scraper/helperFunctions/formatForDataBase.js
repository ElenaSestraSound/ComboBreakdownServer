function formatMove (data) {

  const formattedMove = {
    name: data.name,
    type: data.type || 'default',
    note: data.note || null,
    driveGauge: data.driveGauge || null,
    video: data.video || null,
    definition: data.definition || null,
    classic: data.classic || 'default',
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

  const cleanedMove = Object.fromEntries(
    Object.entries(formattedMove).filter(([_, value]) => value !== null)
  );

  return cleanedMove;

};

export { formatMove };