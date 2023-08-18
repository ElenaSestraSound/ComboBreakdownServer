import { Request, Response, NextFunction } from 'express';
import { db } from '../model/_characterModel';

/* *** GET *** */

const getAllCharacters = async (req: Request, res: Response, next: NextFunction) => {
  try {

    const characters = await db.getAllCharacters();
    res.status(200).send(characters);

  } catch (err) {
    next(err);
  }
};

/* *** GET *** */

const getCharacterListWithoutMoves = async (req: Request, res: Response, next: NextFunction) => {
  try {

    const characters = await db.getAllCharacters();
    res.status(200).send(characters);

  } catch (err) {
    next(err);
  }
};

/* *** GET *** */

const getOneCharacterByName = async (req: Request, res: Response, next: NextFunction) => {
  try {

    const characterName = req.params.name;

    const character = await db.getCharacterByName(characterName);
    // if (character) {
    //   res.status(200).send(character);
    // } else {
    //   res.status(404).send({ message: "Character not found." });
    // }

  } catch (err) {
    next(err);
  }
};

export { getAllCharacters, getOneCharacterByName, getCharacterListWithoutMoves };