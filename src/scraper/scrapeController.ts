import { Request, Response, NextFunction } from 'express';


/* *** GET *** */
/* execute the scraping manually and populate the database for the first time or empty the database and populate it again */

const scrapeManually = async (req: Request, res: Response, next: NextFunction) => {
  try {

      // scrapeFunction

    res.status(200).json({ message: 'Data scraped successfully!' });
  } catch (err) {
    next(err);
  }
};


/* *** POST *** */
/* execute the scraping manually and update the database for a certain URL (character). */

const scrapeSpecificCharacter = async (req: Request, res: Response, next: NextFunction) => {
  try {

    // scrapeFunction

    res.status(200).json({ message: 'Character scraped successfully!' });
  } catch (err) {
    next(err);
  }
};


export { scrapeManually, scrapeSpecificCharacter };
