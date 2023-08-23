import express from 'express';
import { getAllCharacterData, postSpecificCharacterData } from './controller/scrapeController.js';
import { loginAdmin, passwordAdmin } from './authorization/authController.js';
import { ensureToken } from "./authMiddleware";

const router = express.Router();

/* authentication routes */
router.get('/auth/admin', ensureToken, passwordAdmin);
router.post('/auth/admin/login', ensureToken, loginAdmin);

/* scraping routes */
router.get('/scrape/all', ensureToken, getAllCharacterData);
router.post('/scrape/:name', ensureToken, postSpecificCharacterData);

export { router };