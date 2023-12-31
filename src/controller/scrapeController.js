import { runScrapeAndSeed } from "../model/seedDatabase.js";

/* *** GET *** */
/* execute the scraping mechanism and populate the database for the first time or empty the database and populate it again */

const getAllCharacterData = async (req, res, next) => {
  try {
    await runScrapeAndSeed();
    res.status(200);
  } catch (err) {
    next(err);
  }
};

/* *** POST *** */
/* execute the scraping mechanism and update the database for a certain URL (character). */

const postSpecificCharacterData = async (req, res, next) => {
  try {

    const characterName = req.params.name;

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