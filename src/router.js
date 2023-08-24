import express from 'express';
import { getAllCharacterData, postSpecificCharacterData } from './controller/scrapeController.js';
import { loginAdmin, passwordAdmin } from './authorization/authController.js';
import { ensureToken } from "./authorization/authMiddleware.js";

const router = express.Router();

/* authentication routes */
router.get('/auth/admin', ensureToken, passwordAdmin);
router.post('/auth/admin/login', loginAdmin);

/* scraping routes */
router.get('/scrape/all', ensureToken, getAllCharacterData);
router.post('/scrape/:name', ensureToken, postSpecificCharacterData);

/* dummy route */
router.get('/', (req, res) => {
  res.status(200).send('<h1>Server is online!!!!!!</h1>');
});

export { router };