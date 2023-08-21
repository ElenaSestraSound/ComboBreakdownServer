import { filenameAbbreviations } from '../utils/_filenameAbbreviations.mjs';

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

export { handleImage, replaceWithAbbreviation }