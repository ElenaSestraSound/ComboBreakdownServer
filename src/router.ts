import express, { Router } from 'express';
import { getAllCharacters, getOneCharacterByName } from './controller/dbController';
import { getAllCharacterData, postSpecificCharacterData } from './controller/scrapeController';

const router: Router = express.Router();

/* database routes */
router.get('/characters', getAllCharacters);
router.get('/character/:name', getOneCharacterByName);

/* scraping routes */
router.get('/scrape', getAllCharacterData);
router.post('/scrapeUnique', postSpecificCharacterData);

export { router };