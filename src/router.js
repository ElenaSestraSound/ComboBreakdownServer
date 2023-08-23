import express from 'express';
import { getAllCharacterData, postSpecificCharacterData } from './controller/scrapeController.js';
import { loginAdmin, passwordAdmin } from './controller/authController.js';

const router = express.Router();

/* authentication routes */
router.get('/auth/admin', passwordAdmin);
router.post('/auth/admin', loginAdmin);

/* scraping routes */
router.get('/scrape/all', getAllCharacterData);
router.post('/scrape/:name', postSpecificCharacterData);

export { router };