function extractDataFromTable() {

  const filenameAbbreviations = {
    'arrow_3.png': '_',
    'icon_kick.png': 'K',
    'icon_kick_h.png': 'HK',
    'icon_kick_l.png': 'LK',
    'icon_kick_m.png': 'MK',
    'icon_punch.png': 'P',
    'icon_punch_h.png': 'HP',
    'icon_punch_l.png': 'LP',
    'icon_punch_m.png': 'MP',
    'key-all.png': '*',
    'key-circle.png': 'C',
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
    'key-barrage.png': 'KB',
    'key-lc.png': 'LC',
    'key-rc.png': 'RC',
    'key-dc.png': 'DC'
  };

  const moveTypes = [
    'Normal Moves',
    'Unique Attacks',
    'Special Moves',
    'Super Arts',
    'Throws',
    'Common Moves'
  ];
  
  const rows = document.querySelectorAll('#framearea > div > table > tbody > tr');
  
  const results = [];
  
  let styleIndex = -1;

  /* helper functions to get content */

  const getText = (element) => {
    if (!element) return [];
    if (element.children.length === 0) return [element.textContent];
    let content = [];
    for (let i = 0; i < element.children.length; i++) {
      const child = element.children[i];
      const childTexts = getText(child);
      content.push(...childTexts);
    }
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

  /* helper functions to format image urls */

  const extractFileName = (url) => {
    const regexSelectImgFileName = /([^\/]+)$/;
    const match = url.match(regexSelectImgFileName);
    return match ? match[0] : null;
  };
  
  const handleImage = (element) => {
    if (element.tagName.toLowerCase() === 'img' && element.src) {
      const filename = extractFileName(element.src);
      return filename ? [filename] : [];
    }
    return [];
  };
  
  const replaceWithAbbreviation = (arrayOfFilenames) => {
    return arrayOfFilenames.map(filename => {
      if (!filename) return filename;
      return filenameAbbreviations[filename] || filename;
    });
  };

  /* main function to traverse the table */
  
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
      manual: '',
      modern: ''
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
      const resultString = replaceWithAbbreviation(images).join('');
      return resultString === "" ? 'NO INPUT' : resultString;
    }
    result.classic = classicMoves();
  
    mapping.forEach(map => {
      const element = row.children[map.index];
      const text = getText(element);
      if (map.index === 14) {
        result[map.property] = text.join('');
      } else if (map.index === 8) {
        result[map.property] = text.join(',');
      } else if (map.index === 2) {
        if (text.length > 1) {
          let content = text.slice(2, text.length)
          result[map.property] = content.join(',')
          console.log(result.active)
        } else {
          result[map.property] = text[0] || '';
        }
      } else {
        result[map.property] = text[0] || '';
      }
    });
  
    if (result.name && !moveTypes.includes(result.name.trim())) {
      results.push(result);
    } else {
      styleIndex++;
    }
  
  });
  
  return results;

};

export { extractDataFromTable };