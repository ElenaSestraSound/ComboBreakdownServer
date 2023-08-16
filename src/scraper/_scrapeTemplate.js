const Koa = require('koa');
const { fetchHTML, scrapeData } = require('./scrape');
// const {scrapeData} = require('./scrape');

const app = new Koa();

app.use(async (ctx) => {
  const url = 'https://medium.com/swlh/mock-imported-react-components-and-various-helpers-fea4240be7eb';
  // const url = 'https://www.streetfighter.com/6/character/luke/frame';
  // scrapeData(url);
  const html = await fetchHTML(url);
  ctx.body = html;
});

app.listen(3000);

console.log('Server running on http://localhost:3000');


const puppeteer = require('puppeteer');

async function fetchHTML(url) {
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.190 Safari/537.36');
  await page.goto(url, { waitUntil: "domcontentloaded" });
  // await page.setViewport({ width: 1080, height: 1024 });
  const html = await page.content();
  console.log(html);
  console.log(browser);
  await browser.close();
  return html;
}

const originURL = 'https://www.streetfighter.com/6/character/luke/frame';
const originData = fetchHTML(originURL);

async function scrapeData(url) {
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.190 Safari/537.36');
  await page.goto(url);
  const data = await page.evaluate(function() {
    const firstRow = document.querySelectorAll('.frame_heading__YeMdJ tr');
    const array = [];
    for ( let i = 0; i < firstRow.length; i++ ) {
      array.push({
        num: firstRow[i].querySelector('.frame_startup_frame__IeKL6').innerText
      })
    }
    return array;
  })
  console.log(data);
}


module.exports = { scrapeData, fetchHTML };
// exports.fetchHTML = fetchHTML;
// module.exports = scrapeData;


// const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
// const page = await browser.newPage();
// await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.190 Safari/537.36');
// await page.goto('https://www.streetfighter.com/6/es-es/character/luke/movelist');
// await page.setViewport({ width: 1080, height: 1024 });
// const html = await page.content();
// ctx.body = html;