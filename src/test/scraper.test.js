// tests.js
import test from 'ava';
import { processCharacterPage } from '../scraper/characterPage/processCharacterPage.js';


test('Should scrape Street Fighter character data correctly', async t => {
  const url = 'https://www.streetfighter.com/6/character/ryu';
  const result = await processCharacterPage(url);

  const expected = {
    name: "ryu",
    bio: "Ever training, this martial artist seeks true strength. Well-mannered and sincere, Ryu travels the globe in search of worthy opponents. Having overcome the Satsui no Hado, he now seeks yet greater heights.",
    height: "5'9",
    like: "Martial arts",
    notlike: "Spiders",
    weight: "187 lbs",
    vitality: 0,
    moves: []
  };

  t.deepEqual(result, expected);
});

