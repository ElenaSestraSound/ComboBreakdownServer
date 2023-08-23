import express from 'express';
import { getAllCharacterData, postSpecificCharacterData } from './controller/scrapeController.js';
import { loginAdmin, passwordAdmin } from './authorization/authController.js';
import { ensureToken } from "./authorization/authMiddleware.js";

const router = express.Router();

/* authentication routes */
router.get('/auth/admin', ensureToken, passwordAdmin);
router.post('/auth/admin/login', ensureToken, loginAdmin);

/* scraping routes */
router.get('/scrape/all', getAllCharacterData);
router.post('/scrape/:name', postSpecificCharacterData);

export { router };