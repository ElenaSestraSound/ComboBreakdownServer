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

const regexSelectImgFileName = /([^\/]+)$/;

const handleImage = (element) => {
  if (element.tagName.toLowerCase() === 'img' && element.src) {
    const match = element.src.match(regexSelectImgFileName);
    return match ? [match[0]] : [];
  }
  return [];
};

const removeBracketedText = (contentArray) => {
  if (contentArray[0] && /^\(.*\)$/.test(contentArray[0])) {
    contentArray.shift();
  }
  return contentArray;
};

const getContentAndImages = (element) => {
  if (!element) return [];
  let content = [];
  element.childNodes.forEach(child => {
    if (child.nodeType === 1) {
      const imageContent = handleImage(child);
      if (imageContent.length) {
        content.push(...imageContent);
      } else {
        const childContents = getContentAndImages(child);
        content = content.concat(childContents);
      }
    } else if (child.nodeType === 3 && child.textContent.trim() !== '') { // Text node with non-empty content
      content.push(child.textContent.trim());
    }
  });
  return removeBracketedText(content);
};

const results = [];
const rows = document.querySelectorAll('#framearea > div > table > tbody > tr');

let styleIndex = -1;


const filenamesControllerImages = {
  // '0.png': '0',
  'arrow_3.png': '_',
  // 'd1.png': 'd1',
  // 'd2.png': 'd2',
  // 'd3.png': 'd3',
  // 'd05.png': 'd0',
  // 'dd.png': 'dd',
  'icon_kick.png': 'K',
  'icon_kick_h.png': 'HK',
  'icon_kick_l.png': 'LK',
  'icon_kick_m.png': 'MK',
  'icon_punch.png': 'P',
  'icon_punch_h.png': 'HP',
  'icon_punch_l.png': 'LP',
  'icon_punch_m.png': 'MP',
  'key-all.png': '*',
  // 'key-barrage.png': 'kb',
  // 'key-circle.png': 'kc',
  'key-d.png': '2',
  'key-dl.png': '1',
  'key-dr.png': '3',
  'key-l.png': '4',
  'key-nutral.png': '5',
  'key-or.png': '|',
  'key-plus.png': '+',
  'key-r.png': '6',
  'key-u.png': '8',
  'key-ul.png': '7',
  'key-ur.png': '9',
  'modern_auto.png': 'AUTO',
  'modern_dl.png': 'DI',
  'modern_dp.png': 'DP',
  'modern_h.png': 'H',
  'modern_l.png': 'L',
  'modern_m.png': 'M',
  'modern_sp.png': 'SP',
  // 's1.png': 's1',
  // 's2.png': 's2',
  // 's3.png': 's3'
};





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
    definition: '',
    manual: [],
    modern: []
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

  const classicMoves = () => {
    const texts = getContentAndImages(row.children[0]);
    return texts.slice(1);
  }
  result.classic = classicMoves();

  mapping.forEach(map => {
    const element = row.children[map.index];
    const text = getText(element);
    if (map.index === 14) {
      result[map.property] = text.join(' ');
    } else if (map.index === 8) {
      result[map.property] = text;
    } else if (map.index === 2) {
      const firstNonEmptyIndex = text.findIndex(item => item.trim() !== '');
      result[map.property] = firstNonEmptyIndex !== -1 ? text.slice(firstNonEmptyIndex + 1) : [];
    } else {
      result[map.property] = text[0] || '';
    }
  });

  if (result.damage && result.damage.trim() !== '') {
    results.push(result);
  } else {
    styleIndex++;
  }

});


console.log(results);