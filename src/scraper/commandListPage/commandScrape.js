function getCommandPageData () {

  const container = document.querySelectorAll('#Movelist > div.movelist_movelistarea__Y5Ucu > ul > li');
  
  const results = []

  /* helper functions to format image urls */

  const extractFileName = (url) => {
    const regexSelectImgFileName = /([^\/]+)$/;
    const match = url.match(regexSelectImgFileName);
    return match ? match[1].toString() : null;
  };
  
  const handleImage = (element) => {
    if (element.tagName.toLowerCase() === 'img' && element.src) {
      const filename = extractFileName(element.src);
      return filename  ? [filename] : '';
    }
    return '';
  };

  /* helper function to find the image url */

  const getImage = (element) => {
    if (!element) return '';
    let image = handleImage(element)[0];
    if (/\.png$/.test(image)) {
      return image.toString();
    }
    for (const child of element.children) {
      image = getImage(child);
      if (image) return image;
    }
    let currentElement = element;
    while (!/\.png$/.test(image) && currentElement.nextElementSibling) {
      currentElement = currentElement.nextElementSibling;
      image = handleImage(currentElement)[0];
      if (/\.png$/.test(image)) {
        return image.toString();
      }
    }
    return '';
  };

  /* main function to traverse through the moves command list */
  
  container.forEach(element => {
    const name = element.querySelector('.movelist_arts__FFmMk').textContent;
    const gauge = getImage(element.querySelector('.movelist_movelist_drive__dN3Il'));
    let driveGauge = gauge.replace(/^(.+)\.\w+$/, '$1');
    results.push({name, driveGauge});
  })
  
  const char = {}

  let url = window.location.pathname; 
  let segments = url.split('/');
  let characterName = segments[3];

  char.name = characterName;
  char.moves = results;
  return char;
  
};

getCommandPageData();

export { getCommandPageData };