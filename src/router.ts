import express, { Router } from 'express';
import { getAllCharacters, getOneCharacterByName, getCharacterListWithoutMoves } from './controller/_dbController';
import { getAllCharacterData, postSpecificCharacterData } from './controller/scrapeController';

const router: Router = express.Router();

/* database routes */
router.get('/character/all', getAllCharacters);
router.get('/character/:name', getOneCharacterByName);
router.get('./character/list', getCharacterListWithoutMoves)

/* scraping routes */
router.get('/scrape/all', getAllCharacterData);
router.post('/scrape/:name', postSpecificCharacterData);

export { router };