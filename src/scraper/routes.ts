import express, { Router } from 'express';
import { scrape, scrapeOneCharacter } from './scrapeController'; // Make sure to import the functions from the correct file

const router: Router = express.Router();

router.get('/scrape', scrape);

router.post('/scrape', scrapeOneCharacter);

export { router };