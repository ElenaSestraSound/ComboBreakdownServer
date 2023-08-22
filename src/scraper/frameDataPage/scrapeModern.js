function getModernControls() {

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

  const getImages = (element) => {
    if (!element) return [];
    let images = [];
    element.childNodes.forEach(child => {
      if (child.nodeType === 1) {
        const imageContent = handleImage(child);
        if (imageContent.length) {
          images.push(...imageContent);
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

    const result = {}

    const modernMoves = () => {
      const images = getImages(row.children[0].children[1]);
      const resultString = replaceWithAbbreviation(images).join('');
      return resultString === "" ? 'NO INPUT' : resultString;
    }

    const manualMoves = () => {
      if (!row || !row.children[0] || !row.children[0].children[1]) {
          return '';
      }
      const spanElement = row.children[0].children[1].querySelector('span');
      if (!spanElement) {
          return '';
      }
      const images = getImages(spanElement);
      const resultString = replaceWithAbbreviation(images).join('');
      return resultString === '' ? '' : resultString;
    }
  
    result.name = row.children[0].children[0].textContent
    result.modern = modernMoves();
    result.manual = manualMoves();

    if (result.name && !moveTypes.includes(result.name.trim())) {
      results.push(result);
    } else {
      styleIndex++;
    }

  });

  const char = {}

  let url = window.location.pathname; 
  let segments = url.split('/');
  let characterName = segments[3];

  char.name = characterName;
  char.moves = results;
  return char;

}
// getModernControls();

export { getModernControls };