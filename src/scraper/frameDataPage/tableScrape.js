import { handleImage, replaceWithAbbreviation } from './helperFunctions';

function extractDataFromTable() {
  
  const rows = document.querySelectorAll('#framearea > div > table > tbody > tr');
  
  const results = [];
  
  let styleIndex = -1;

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
  
  const getImages = (element) => {
    if (!element) return [];
    let images = [];
    element.childNodes.forEach(child => {
      if (child.nodeType === 1) {
        const imageContent = handleImage(child);
        if (imageContent.length) {
          images.push(...imageContent);
        } else {
          const childImages = getImages(child);
          images = images.concat(childImages);
        }
      }
    });
    return images;
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
      return (texts[1] || '').trim();
    }
    result.note = noteFunction();
    
    const classicMoves = () => {
      const images = getImages(row.children[0]);
      return replaceWithAbbreviation(images).join('');
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
  
  return results;

}

export { extractDataFromTable };