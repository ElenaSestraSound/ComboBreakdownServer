const getText = (element) => {
  if (!element) return [];
  if (element.childNodes.length === 0) return [element.textContent];
  let content = [];
  element.childNodes.forEach(child => {
    const childTexts = getText(child);
    content = content.concat(childTexts);
  });
  return content;
};

const results = [];
const rows = document.querySelectorAll('#framearea > div > table > tbody > tr');

let styleIndex = -1;

rows.forEach(row => {

  const mapping = [
    { index: 0, property: 'name' },
    { index: 1, property: 'startup' },
    { index: 2, property: 'active' },
    { index: 3, property: 'missRecovery' },
    { index: 4, property: 'hitStunRecovery' },
    { index: 5, property: 'blockStunRecovery' },
    { index: 6, property: 'cancelable' },
    { index: 7, property: 'damage' },
    { index: 8, property: 'scaling' },
    { index: 9, property: 'driveIncreaseHit' },
    { index: 10, property: 'driveDecreaseBlock' },
    { index: 11, property: 'driveDecreasePunish' },
    { index: 12, property: 'superArtGaugeIncrease' },
    { index: 13, property: 'properties' },
    { index: 14, property: 'miscellaneous' }
  ];

  const result = {
    driveGauge: '',
    video: '',
    definition: ''
  }

  const typeFunction = (styleIndex) => {
    const styles = ['normal', 'unique', 'special', 'super', 'throw', 'common'];
    return styles[styleIndex];
  }
  result.type = typeFunction(styleIndex);

  const noteFunction = () => {
    const texts = getText(row.children[0]);
    return texts[1] || '';
  }
  result.note = noteFunction();

  // const result = {
  //   classic: '',
  //   modern: '',
  //   manual: '',
  // };

  mapping.forEach(map => {
    const element = row.children[map.index];
    const text = getText(element);
    if (map.index === 14) {
      result[map.property] = text.join(' ');
    } else {
      result[map.property] = text[0] || '';
    }
  });
  
  // mapping.forEach(map => {
  //   const element = map.childIndex !== undefined ? 
  //     row.children[map.index] && row.children[map.index].children[map.childIndex] : 
  //     row.children[map.index];
  //   result[map.property] = getText(element);
  // });

  if (result.damage && result.damage.trim() !== '') {
    results.push(result);
  } else {
    styleIndex++;
  }

});

console.log(results);