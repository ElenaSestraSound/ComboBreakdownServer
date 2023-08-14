import { prisma } from '../prisma/client';
import { Character } from './type';

const dbCharacter = {

  getAllCharacters: async (): Promise<Character[]> => {
    return prisma.character.findMany();
  },

  createCharacterCollection: async (characters: createNewCharacter[]): Promise<Character[]> => {
    const createCharacterPromises = characters.map(character => prisma.character.create({ data: character }));
    return prisma.$transaction(createCharacterPromises);
  },

  getCharacterByName: async (name: string): Promise<Character | null> => {
    return prisma.character.findUnique({
      where: { name },
    });
  },

  getCharacterById: async (_id: string): Promise<Character | null> => {
    return prisma.character.findUnique({
      where: { id: _id },
    });
  },

  updateOneCharacter: async (
    _id: string,
    updatedData: updateCharacterData
  ): Promise<Character> => {
    return prisma.character.update({
      where: { id: _id },
      data: updatedData,
    });
  }

}

export { dbCharacter };