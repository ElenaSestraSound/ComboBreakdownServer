import express, { Router } from 'express';
import { scrapeDatabase, scrapeSpecificCharacter } from './scrapeController'; // Make sure to import the functions from the correct file

const router: Router = express.Router();

router.get('/scrape', scrapeDatabase);

router.post('/scrape', scrapeSpecificCharacter);

export { router };
