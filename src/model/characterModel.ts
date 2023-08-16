import { prisma } from '../prisma/client';
import { Character } from './type';

const db = {

  getAllCharacters: async (): Promise<Character[]> => {
    return prisma.character.findMany();
  },

  createCharacterCollection: async (characters: Character[]): Promise<Character[]> => {
    const createCharacterPromises = characters.map(character => prisma.character.create({ data: character }));
    return prisma.$transaction(createCharacterPromises);
  },

  getCharacterByName: async (name: string): Promise<Character | null> => {
    return prisma.character.findFirst({
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
    updatedData: Partial<Character>
  ): Promise<Character> => {
    return prisma.character.update({
      where: { id: _id },
      data: updatedData,
    });
  }

}

export { db };
