import { prisma } from '../prisma/client';
import { FrameData } from './type';

const dbFrameData = {

  // getAllFrameData: async (): Promise<FrameData[]> => {
  //   return prisma.frameData.findMany();
  // },

  getFrameDataById: async (_id: string): Promise<FrameData | null> => {
    return prisma.frameData.findUnique({
      where: { id: _id },
    });
  },

  // createFrameData: async (frameData: createNewFrameData): Promise<FrameData> => {
  //   return prisma.frameData.create({
  //     data: frameData,
  //   });
  // },

  // deleteFrameData: async (_id: string): Promise<void> => {
  //   await prisma.frameData.delete({
  //     where: { id: _id },
  //   });
  // },

  // updateFrameData: async (
  //   _id: string,
  //   updatedData: updateFrameDataData
  // ): Promise<FrameData> => {
  //   return prisma.frameData.update({
  //     where: { id: _id },
  //     data: updatedData,
  //   });
  // }

}

export { dbFrameData };
