import express, { Router } from 'express';
import { scrapeManually, scrapeSpecificCharacter } from './scrapeController'; // Make sure to import the functions from the correct file

const router: Router = express.Router();

router.get('/scrape', scrapeManually);

router.post('/scrape', scrapeSpecificCharacter);

export { router };
