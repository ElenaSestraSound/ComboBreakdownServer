const baseUrl = 'https://www.streetfighter.com/6/character/';
const characters = [
  'rashid', 'cammy', 'lily', 'zangief', 'jp', 'marisa', 'manon', 'deejay', 'honda',
  'dhalsim', 'blanka', 'ken', 'juri', 'kimberly', 'guile', 'chun-li', 'jaime', 'luke', 'ryu'
];

const charactersObject = characters.reduce((obj, character) => {
  obj[character] = baseUrl + character;
  return obj;
}, {});

console.log(charactersObject);

const paths = ['/movelist', '/frame'];

// To get all the info fro a characters we need to do 3 calls
// basic data: https://www.streetfighter.com/6/character/luke
// combos: https://www.streetfighter.com/6/character/luke/movelist
// frame data: https://www.streetfighter.com/6/character/luke/frame

// Also keep in mind that the modern controls are behind a button click

const puppeteer = require('puppeteer');


async function processPage(url) {
  // Here, write the function you want to execute on each page
  console.log(`Processing ${url}`);
}

(async () => {
  const browser = await puppeteer.launch();

  for (const character in charactersObject) {
    const page = await browser.newPage();
    await page.goto(charactersObject[character]);
    await processPage(charactersObject[character]);
    await page.close();
  }

  await browser.close();
})();
