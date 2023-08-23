import express from 'express';
import { getAllCharacterData, postSpecificCharacterData } from './controller/scrapeController.js';

const router = express.Router();

/* scraping routes */
router.get('/scrape/all', getAllCharacterData);
router.post('/scrape/:name', postSpecificCharacterData);

/* dummy route */
router.get('/', (req, res) => {
  res.status(200).send('<h1>Server is online!!!!!!</h1>');
});

export { router };