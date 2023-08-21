import express from 'express';
import { getAllCharacterData, postSpecificCharacterData } from './controller/scrapeController.js';

const router = express.Router();

/* scraping routes */
router.get('/scrape/all', getAllCharacterData);
router.post('/scrape/:name', postSpecificCharacterData);

export { router };