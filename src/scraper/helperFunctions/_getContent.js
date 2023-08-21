import { handleImage } from './_handleImage.js';

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

export { getText, getImages };