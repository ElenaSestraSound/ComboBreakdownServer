function scrapeCommandList() {
  const container = document.querySelectorAll('#Movelist > div.movelist_movelistarea__Y5Ucu > ul > li');

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
  
  container.forEach(elem => {
    console.log(elem.children[1].children[0].textContent);
    console.log(getImages(elem.children[2]))
  })
}
scrapeCommandList()