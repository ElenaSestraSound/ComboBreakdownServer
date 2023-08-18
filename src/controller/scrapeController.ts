import { Request, Response, NextFunction } from 'express';

/* *** GET *** */
/* execute the scraping mechanism and populate the database for the first time or empty the database and populate it again */

const getAllCharacterData = async (req: Request, res: Response, next: NextFunction) => {
  try {

  } catch (err) {
    next(err);
  }
};

/* *** POST *** */
/* execute the scraping mechanism and update the database for a certain URL (character). */

const postSpecificCharacterData = async (req: Request, res: Response, next: NextFunction) => {
  try {

    const characterName = req.body.name;

    const character = () => {};

    if (character) {
      res.status(200).send(character);
    } else {
      res.status(404).send({ message: "Character not found." });
    }

  } catch (err) {
    next(err);
  }
};

export { getAllCharacterData, postSpecificCharacterData };