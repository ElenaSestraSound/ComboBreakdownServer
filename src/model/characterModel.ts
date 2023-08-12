import { prisma } from '../prisma/client';
import { Character, Move, FrameData } from './type';

const db = {

  getAllCharacters: async (): Promise<Character[]> => {
    return prisma.character.findMany();
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

  // createCharacter: async (character: createNewCharacter): Promise<Character> => {
  //   return prisma.character.create({
  //     data: character,
  //   });
  // },

  // deleteCharacter: async (_id: string): Promise<void> => {
  //   await prisma.character.delete({
  //     where: { id: _id },
  //   });
  // },

  // updateCharacter: async (
  //   _id: string,
  //   updatedData: updateCharacterData
  // ): Promise<Character> => {
  //   return prisma.character.update({
  //     where: { id: _id },
  //     data: updatedData,
  //   });
  // }

}

export { db };
