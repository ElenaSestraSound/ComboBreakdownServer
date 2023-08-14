import express, { Router } from 'express';
import { scrape, scrapeOneCharacter } from './scrapeController';

const router: Router = express.Router();

router.get('/scrape', scrape);

router.post('/scrape', scrapeOneCharacter);

export { router };
